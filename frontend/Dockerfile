FROM node:24.0.2-alpine3.21 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.29.4-alpine-slim
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8088
CMD ["nginx", "-g", "daemon off;"]
