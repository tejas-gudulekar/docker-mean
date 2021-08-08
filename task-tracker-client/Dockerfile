FROM node:12-alpine3.12

RUN mkdir -p /srv/client/
COPY . /srv/client/
WORKDIR /srv/client/
RUN cd /srv/client/
RUN npm install
EXPOSE 4200

CMD ["npm","start"]