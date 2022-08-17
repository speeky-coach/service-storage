FROM node:18.6.0-alpine3.15

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
CMD ["npm", "start"]