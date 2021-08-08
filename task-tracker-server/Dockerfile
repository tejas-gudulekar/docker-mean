FROM node:12-alpine3.12

RUN mkdir -p /srv/server/
COPY . /srv/server/
WORKDIR /srv/server/
RUN cd /srv/server/
RUN npm install
EXPOSE 3000

CMD ["node","server.js"]