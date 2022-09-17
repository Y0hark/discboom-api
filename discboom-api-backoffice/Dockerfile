FROM strapi/base

ENV NODE_ENV production

WORKDIR /discboom-api-backoffice

COPY . .

RUN npm run build --clean

EXPOSE 1337

CMD ["npm", "start"]