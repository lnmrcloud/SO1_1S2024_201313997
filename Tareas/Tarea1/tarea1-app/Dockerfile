FROM node:17-alpine

WORKDIR /tarea1-app

COPY package.json .

RUN npm install

COPY . . 

EXPOSE 3000

CMD ["npm","start"]