FROM node:12
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80

CMD [ "node", "controller.js" ]