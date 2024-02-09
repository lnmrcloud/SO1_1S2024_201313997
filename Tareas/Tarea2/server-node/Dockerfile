FROM node:18-alpine

RUN mkdir -p /server-node

WORKDIR /server-node

COPY package.json /server-node/

RUN npm install

COPY . /server-node/

EXPOSE 8080

CMD [ "npm", "start" ]