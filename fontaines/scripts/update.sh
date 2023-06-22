#!/bin/sh

###################################################################
#Script Name	: update.sh
#Description	: push Eau de Paris geojson data in database
#Author       	: Gaetan B, Pierre J
#Email         	: pierre.jego@jdev.fr
###################################################################

sendMail() {
  export EMAIL=$2
  mutt -e "my_hdr Content-Type: text/html" -s "$3" "$4" < $1
}

NOW=$(date +"%Y-%m-%d")
LOGS=/var/fontaines/logs/$NOW.traces.log

CONTINUE=true

#Variable Commune a tous les mail
NOM_DE_LEMETTEUR="noreply@eaudeparis.fr"
OBJET_MAIL="Carte des fontaines - Erreur de mise a jour"
#Tiré d'une variable d'environement
DESTINATAIRES=${DESTINATAIRES}

#Variable spécifique en fonction de l'erreur
ERREUR_RECUP_FICHIER_FONTAINE_TEMPLATE=/scripts/template/erreur_recup_fichier_fontaine.html

ERREUR_OGR2OGR_FONTAINE_TEMPLATE=/scripts/template/erreur_ogr_fontaine.html

ERREUR_PSQL_FONTAINE_TEMPLATE=/scripts/template/erreur_psql_fontaine.html

ERREUR_RECUP_FICHIER_COMMERCE_TEMPLATE=/scripts/template/erreur_recup_fichier_commerce.html

ERREUR_OGR2OGR_COMMERCE_TEMPLATE=/scripts/template/erreur_ogr_commerce.html

ERREUR_PSQL_COMMERCE_TEMPLATE=/scripts/template/erreur_psql_commerce.html

echo $NOW >>$LOGS
echo "*** Start udpate***" >>$LOGS

RESULT=/var/fontaines/data/fontaine.json
RESULT_DIR=/var/fontaines/data/

####################FONTAINE

echo " Récupération du fichier via SFTP " >>$LOGS
if sshpass -p "${SFTP_PWD}" sftp -o "HostKeyAlgorithms ssh-rsa" "sftp://${SFTP_USER}@${SFTP_URL}:${SFTP_PORT}/${FILENAME}" $RESULT; then
  echo "Integration des données dans la base" >>$LOGS
  PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "DROP TABLE IF EXISTS fontaine.fontaine_tmp;"
  ogr2ogr -f "PostgreSQL" PG:"host=${POSTGRES_HOSTNAME} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" -lco SCHEMA=${SCHEMA} -lco OVERWRITE=YES $RESULT -nln fontaine_tmp -nlt POINT -s_srs "EPSG:4326" -t_srs "EPSG:4326" >>$LOGS
  if [ $? -ne 0 ]; then
    sendMail "$ERREUR_OGR2OGR_FONTAINE_TEMPLATE" "$NOM_DE_LEMETTEUR" "$OBJET_MAIL" "$DESTINATAIRES"
    #    Si il y'a une erreur on stop la suite pour les fontaines
    CONTINUE=false
  fi

  if $CONTINUE; then

    echo "Modification des données fontaine" >>$LOGS
    PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -f /scripts/fontaine_update.sql
    if [ $? -ne 0 ]; then
      sendMail "$ERREUR_PSQL_FONTAINE_TEMPLATE" "$NOM_DE_LEMETTEUR" "$OBJET_MAIL" "$DESTINATAIRES"
    fi
    echo "Modification des données" >>$LOGS
    PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "update fontaine.fontaine set type_objet_lib='Fontaine des bois parcs et jardins' where type_objet_lib='Fontaine des bois, parcs et jardins';"
  fi
else
  sendMail "$ERREUR_RECUP_FICHIER_FONTAINE_TEMPLATE" "$NOM_DE_LEMETTEUR" "$OBJET_MAIL" "$DESTINATAIRES"
  echo "Erreur lors de la récupération du fichier, aucune données mise à jour"
  >>$LOGS
fi

####################COMMERCE

echo " Récupération des fichiers commerces via SFTP " >>$LOGS
if sshpass -p "${SFTP_PWD}" sftp -o "HostKeyAlgorithms ssh-rsa" -r ${SFTP_USER}@${SFTP_URL}:/ $RESULT_DIR; then
  #  On repasse a true pour faire aussi la vérif sur "COMMERCE"
  CONTINUE=true
  echo "Intégration du shp commerce en base de données" >>$LOGS
  PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "DROP TABLE IF EXISTS fontaine.commerce_tmp;"
  PGCLIENTENCODING=LATIN1 ogr2ogr -f "PostgreSQL" PG:"host=${POSTGRES_HOSTNAME} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" -lco GEOMETRY_NAME=geom -lco SCHEMA=fontaine -lco OVERWRITE=YES -nln commerce_tmp -nlt MULTIPOINT -s_srs "EPSG:2154" -t_srs "EPSG:2154" "${RESULT_DIR}/COMMERCE.shp" >>$LOGS
  #Si la commande ogr2ogr plante on envoie un mail
  if [ $? -ne 0 ]; then
    sendMail "$ERREUR_OGR2OGR_COMMERCE_TEMPLATE" "$NOM_DE_LEMETTEUR" "$OBJET_MAIL" "$DESTINATAIRES"
    CONTINUE=false
  fi

  if $CONTINUE; then
    echo "Modification des données commerce" >>$LOGS
    PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -f /scripts/commerce_update.sql
    if [ $? -ne 0 ]; then
      sendMail "$ERREUR_PSQL_COMMERCE_TEMPLATE" "$NOM_DE_LEMETTEUR" "$OBJET_MAIL" "$DESTINATAIRES"
    fi

  fi
else

  sendMail "$ERREUR_RECUP_FICHIER_COMMERCE_TEMPLATE" "$NOM_DE_LEMETTEUR" "$OBJET_MAIL" "$DESTINATAIRES"

fi
echo "***END SCRIPT***" >>$LOGS
