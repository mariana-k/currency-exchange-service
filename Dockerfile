# Use the official Node.js image.
# Check the latest version at https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies using the `npm ci` command instead of `npm install`
# https://docs.npmjs.com/cli/v7/commands/npm-ci
COPY package*.json ./
RUN npm ci

# Copy app files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
