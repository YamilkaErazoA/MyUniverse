FROM node

WORKDIR /app-yamilka

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]