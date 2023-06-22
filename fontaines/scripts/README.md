# Update.sh

Ce code est un script shell qui permet de mettre à jour une base de données avec des données géospatiales (au format GeoJSON) provenant d'une source distante (via SFTP).

Le script commence par définir des variables contenant des adresses de fichiers et des adresses de serveurs pour faciliter l'écriture du script. Ensuite, il définit une fonction sendMail() qui permet d'envoyer un e-mail avec un contenu HTML.

Le script utilise également la commande "date" pour obtenir la date actuelle, qui est utilisée pour nommer le fichier journal de la mise à jour.

Ensuite, le script commence la mise à jour proprement dite en récupérant le fichier GeoJSON via SFTP. S'il y a une erreur lors de la récupération du fichier, le script envoie un e-mail pour informer les destinataires. Si la récupération est réussie, les données sont intégrées dans la base de données en utilisant la commande ogr2ogr. Si la commande échoue, un e-mail est envoyé pour informer les destinataires.

Ensuite, le script récupère un ensemble de fichiers de données (commerces) via SFTP et les intègre dans la base de données en utilisant la commande ogr2ogr. Si la commande échoue, un e-mail est envoyé pour informer les destinataires.

Enfin, le script met à jour certaines données dans la base de données en utilisant la commande psql. Le script utilise également la commande echo pour enregistrer toutes les étapes de la mise à jour dans un fichier journal.

Si la commande échoue, un e-mail est envoyé pour informer les destinataires.

Le script est conçu pour être exécuté de manière répétitive, à des intervalles réguliers, afin de maintenir les données de la base de données à jour.


###  Comment fonction la fonction sendMail() ?

```bash
sendMail() {
  cat $1 | mail -a "Content-type: text/html" -r "$2" -s "$3" "$4";

}

```



Cette commande attend 4 paramètres

 - Le premier ($1) est l'emplacement du fichier html qui contient le corps
du mail envoyé
 - Le second ($2) est le nom de l'emetteur (qui aparaitra dans la boite mail exemple "Jean Durant")
 - Le troisième ($3) est l'objet du mail /!\ NE DOIT CONTENIR QUE DES CARACTÈRE ASCII /!\
 - Le dernier ($4) est la liste des destinataires (séparé par des virgules)

Exemple :

```bash

sendMail "./template/unFichier.html" "NO REPLY" "Erreur xxx [PROD]" "exemple@exmple.fr,whatever@nimporte.com"

```
Enverra le contenue de "./template/unFichier.html" en temps que "NO REPLY"

avec pour objet "Erreur xxx [PROD]" aux adresses "exemple@exmple.fr" ET "whatever@nimporte.com"


### A Savoir

```bash
#Variable spécifique en fonction de l'erreur
ERREUR_RECUP_FICHIER_TEMPLATE=./template/erreur_recup_fichier_fontaine.html
ERREUR_RECUP_FICHIER_OBJET_DU_MAIL="[EDP - DEMO] Récupération impossible des fichiers"
```

Ce sont des variables qui permet de modifier facilement par exemple l'objet du mail envoyer en cas d'erreur de <br/>
récupération de fichier