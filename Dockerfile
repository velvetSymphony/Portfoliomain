FROM node:alpine AS Build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY . .
RUN npm ci --production
RUN npm run build

FROM nginx:alpine AS Prod
COPY --from=Build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  



