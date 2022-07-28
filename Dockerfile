FROM node:14.19-alpine

WORKDIR /app

COPY package*.json ./
COPY src ./

RUN npm install

CMD yarn
COPY --chown=node:node . .

EXPOSE 5500

CMD [ "npm", "run", "server" ]
