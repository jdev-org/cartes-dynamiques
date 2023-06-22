#!/bin/sh
set -e

# Redéfition de l'adresse du Geoserver
[ -n ${GEOSERVER_URL} ] && find /usr/share/nginx/html/apps -type f -name "default.xml" -exec sed -i "s/\[GEOSERVER_URL\]/${GEOSERVER_URL//\//\\/}/g" {} \;
sed -i 's|80;|8080;|' /etc/nginx/conf.d/default.conf ;
sh /docker-entrypoint.sh nginx -g "daemon off;"