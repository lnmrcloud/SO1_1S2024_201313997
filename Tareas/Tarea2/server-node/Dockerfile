FROM node:18-alpine

RUN mkdir /server-node

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY *.js . 

EXPOSE 8080

CMD [ "node", "app.js" ]