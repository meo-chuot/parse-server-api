FROM node:lts-alpine
WORKDIR /srv
ENV NODE_ENV development

COPY . .
RUN yarn install

CMD ["yarn", "dev"]
