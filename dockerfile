FROM node:12
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD [ "nodemon --exec babel-node server.js" ]