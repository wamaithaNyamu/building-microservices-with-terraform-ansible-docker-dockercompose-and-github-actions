FROM node:16 as build

ARG KANYE_SERVICE_URL
ARG DADJOKES_SERVICE_URL
ARG MYJOKES_SERVICE_URL
ARG REACT_APP_HOST_IP_ADDRESS

ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS
ENV REACT_APP_KANYE_SERVICE_URL $KANYE_SERVICE_URL
ENV REACT_APP_DADJOKES_SERVICE_URL $DADJOKES_SERVICE_URL
ENV REACT_APP_MYJOKES_SERVICE_URL $MYJOKES_SERVICE_URL

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm install

COPY . .

RUN npm run css
RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html
