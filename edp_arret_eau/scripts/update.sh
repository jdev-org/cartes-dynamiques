#!/bin/sh

###################################################################
#Script Name	: update_arret.sh
#Description	: push Arret eau data in database
###################################################################

NOW=$(date +"%Y-%m-%d")
LOGS=/var/arret-eau/logs/$NOW.traces.log

echo $NOW >> $LOGS
echo "*** Start udpate***" >> $LOGS

RESULT=/var/arret-eau/data/

echo " Récupération des fichiers via SFTP " >> $LOGS
if sshpass -p "${SFTP_PWD}" sftp -o "HostKeyAlgorithms ssh-rsa" -r ${SFTP_USER}@${SFTP_URL}:/ARRET_EAU $RESULT; then

  echo "Intégration du shp arrondissement en base de données" >> $LOGS
  PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "DROP TABLE IF EXISTS edp.arrondissement_tmp;"
  ogr2ogr -f "PostgreSQL" PG:"host=${POSTGRES_HOSTNAME} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" -lco GEOMETRY_NAME=geom -lco SCHEMA=edp -lco OVERWRITE=YES -nln arrondissement_tmp -nlt MULTIPOLYGON -s_srs "EPSG:2154" -t_srs "EPSG:2154" "${RESULT}ARRET_EAU/ARRONDISSEMENT.shp" >> $LOGS

  echo "Intégration du shp arret_eau_l en base de données" >> $LOGS
  PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "DROP TABLE IF EXISTS edp.arret_eau_l_tmp;"
  ogr2ogr -f "PostgreSQL" PG:"host=${POSTGRES_HOSTNAME} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" -lco GEOMETRY_NAME=geom -lco SCHEMA=edp -lco OVERWRITE=YES -nln arret_eau_l_tmp -nlt MULTILINESTRING -s_srs "EPSG:2154" -t_srs "EPSG:2154" "${RESULT}ARRET_EAU/ARRET_EAU_L.shp" >> $LOGS

  echo "Intégration du shp arret_eau_p en base de données" >> $LOGS
  PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "DROP TABLE IF EXISTS edp.arret_eau_p_tmp;"
  ogr2ogr -f "PostgreSQL" PG:"host=${POSTGRES_HOSTNAME} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" -lco GEOMETRY_NAME=geom -lco SCHEMA=edp -lco OVERWRITE=YES -nln arret_eau_p_tmp -nlt POINT -s_srs "EPSG:2154" -t_srs "EPSG:2154" "${RESULT}ARRET_EAU/ARRET_EAU_P.shp" >> $LOGS

  echo "Intégration du shp udi en base de données" >> $LOGS
  PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c "DROP TABLE IF EXISTS edp.udi_tmp;"
  ogr2ogr -f "PostgreSQL" PG:"host=${POSTGRES_HOSTNAME} port=${POSTGRES_PORT} dbname=${POSTGRES_DB} user=${POSTGRES_USER} password=${POSTGRES_PASSWORD}" -lco GEOMETRY_NAME=geom -lco SCHEMA=edp -lco OVERWRITE=YES -nln udi_tmp -nlt MULTIPOLYGON -s_srs "EPSG:2154" -t_srs "EPSG:2154" "${RESULT}ARRET_EAU/UDI.shp" >> $LOGS

  echo "Modification des données" >> $LOGS
  PGPASSWORD=${POSTGRES_PASSWORD} psql -h ${POSTGRES_HOSTNAME} -U ${POSTGRES_USER} -d ${POSTGRES_DB} -f /scripts/arret_update.sql

else
	echo "Erreur lors de la récupération des fichiers du dossier /ARRET_EAU, aucune données mise à jour"; >> $LOGS
fi;
echo "***END SCRIPT***" >> $LOGS