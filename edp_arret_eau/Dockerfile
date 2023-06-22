FROM nginx:alpine

ARG APP_VERSION
ARG NEXUS3_PSW
ARG NEXUS3_USR
ARG NEXUS_SERVER=nexus3-ovh.priv.atolcd.com

# Package et script pour la synchro des données
RUN apk update && apk upgrade && apk add gdal-tools sshpass openssh postgresql-client postgis

WORKDIR /scripts

COPY scripts/* ./

RUN chmod +x /scripts/*.sh \
  && mkdir -p /var/arret-eau/logs/ \
  && mkdir -p /var/arret-eau/data/

# Récupération de mviewer et de la configuration de la carte
WORKDIR /livraison

RUN wget -c https://github.com/geobretagne/mviewer/archive/v3.6.1.zip && \
unzip v3.6.1.zip && \
mv /livraison/mviewer-3.6.1/* /usr/share/nginx/html/ && \
rm -rf /livraison/mviewer-3.6.1 && \
rm /livraison/v3.6.1.zip && \
curl -o carte_edp_arret_eau_${APP_VERSION}.zip "https://${NEXUS3_USR}:${NEXUS3_PSW}@${NEXUS_SERVER}/repository/carte-fontaine/zip/carte_edp_arret_eau_${APP_VERSION}.zip" && \
unzip carte_edp_arret_eau_${APP_VERSION}.zip && \
rm carte_edp_arret_eau_${APP_VERSION}.zip && \
mv /livraison/* /usr/share/nginx/html/apps

RUN cp -rf /usr/share/nginx/html/apps/css/base_css/* /usr/share/nginx/html/css/ && \
rm -rf /usr/share/nginx/html/apps/css/base_css



WORKDIR /

RUN rm -rf /livraison

STOPSIGNAL SIGQUIT

ENTRYPOINT [ "/scripts/mviewer_entrypoint.sh" ]
