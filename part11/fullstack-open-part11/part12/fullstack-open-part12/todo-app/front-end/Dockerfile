FROM node:16 AS build-stage

USER node
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

ENV REACT_APP_BACKEND_URL=todo-backend:*

RUN npm ci

RUN npm run build

RUN npm install -g serve

CMD ["serve", "build"]
