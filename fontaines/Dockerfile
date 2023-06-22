FROM nginx:alpine

ARG APP_VERSION
ARG NEXUS3_PSW
ARG NEXUS3_USR
ARG NEXUS_SERVER=nexus3-ovh.priv.atolcd.com

# Package et script pour la synchro des données
RUN apk update && apk upgrade && apk add gdal-tools sshpass openssh postgresql-client mutt

WORKDIR /scripts

COPY scripts/*.sh ./
COPY scripts/*.sql ./
COPY scripts/template/*.html ./template/

RUN chmod +x /scripts/*.sh \
  && mkdir -p /var/fontaines/logs/ \
  && mkdir -p /var/fontaines/data/

# Récupération de mviewer et de la configuration de la carte
WORKDIR /livraison

RUN wget -c https://github.com/geobretagne/mviewer/archive/v3.4.1.zip && \
unzip v3.4.1.zip && \
mv /livraison/mviewer-3.4.1/* /usr/share/nginx/html/ && \
curl -o carte_fontaines_${APP_VERSION}.zip "https://${NEXUS3_USR}:${NEXUS3_PSW}@${NEXUS_SERVER}/repository/carte-fontaine/zip/carte_fontaines_${APP_VERSION}.zip" && \
unzip carte_fontaines_${APP_VERSION}.zip && \
rm carte_fontaines_${APP_VERSION}.zip && \
mv /livraison/* /usr/share/nginx/html/apps

WORKDIR /

RUN rm -rf /livraison

STOPSIGNAL SIGQUIT

ENTRYPOINT [ "/scripts/mviewer_entrypoint.sh" ]
