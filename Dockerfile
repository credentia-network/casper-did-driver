FROM node:17.0.1
LABEL maintainer="Credentia Network"
LABEL repository="git@github.com:credentia-network/casper-did-driver.git"

USER root

# add source files
RUN mkdir "casper-did-driver"
ADD LICENSE package.json yarn.lock README.md casper-did-driver/
ADD src/ casper-did-driver/src/
RUN cd casper-did-driver && yarn install --prod --frozen-lockfile

EXPOSE 8081

ENTRYPOINT ["node", "/casper-did-driver/src/server.js"]
