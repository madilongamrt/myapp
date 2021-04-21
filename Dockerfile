FROM node:10

#create app directory
WORKDIR /usr/src/app


COPY package*.json ./


RUN npm install


#bundle app source
COPY . .

EXPOSE 8080
CMD [ "node","server.js" ]