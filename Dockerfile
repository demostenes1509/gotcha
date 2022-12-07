FROM node:16.18.0-slim
RUN apt-get update && apt-get install procps -y
RUN npm i -g @nestjs/cli