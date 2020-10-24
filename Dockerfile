FROM node:15.0.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY ["server", "./"]

COPY ["public", "./"]

EXPOSE 4000

CMD npm start