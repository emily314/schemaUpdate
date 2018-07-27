FROM artifactory.swg.usma.ibm.com:6555/node-base-image

ARG GIT_URL
ARG GIT_BRANCH
ARG GIT_COMMIT
ARG TIMESTAMP
ARG VERSION
ARG PROJECT_ID
ARG NODEPROJECT
ARG PACKAGE
ARG NR
ARG NODEMODULES

MAINTAINER ICS

ENV NPM_CONFIG_LOGLEVEL=info SERVICE_USER=ibm
ENV DB_HOST DB_PORT DB_NAME DB_USER DB_PASSSWORD
ENV APP_DIR=/home/$SERVICE_USER/app/

ADD . /home/$SERVICE_USER/app/

RUN chown -R ${SERVICE_USER}.${SERVICE_USER} /home/${SERVICE_USER}/app

WORKDIR $APP_DIR

# RUN npm install --production --registry https://artifactory.swg.usma.ibm.com/artifactory/api/npm/v-ess-npm-prod

LABEL git.url=${GIT_URL} git.branch=${GIT_BRANCH} \
  git.commit=${GIT_COMMIT} service=${PROJECT_ID} \
  version=${VERSION}

USER $SERVICE_USER

# Expose the default ports
EXPOSE 4000

CMD ["npm", "run", "start-prod"]
