FROM node:20.11-alpine3.18 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:1.25.4-alpine3.18

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app to nginx public folder
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf .

# Expose port 80
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]