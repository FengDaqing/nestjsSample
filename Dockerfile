FROM node:10

WORKDIR /nestjsrealworld

# Install NPM deps
COPY package.json package.json
COPY package-lock.json package-lock.json	
# Point to internal npm registry
RUN npm set registry https://registry.npm.taobao.org
RUN npm install
COPY . .

# Bundle app source
RUN npm run build

# Start server
EXPOSE 80
CMD ["node", "dist/main.js"]
