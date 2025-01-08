# Use the official Node.js 16 image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies (production only)
RUN npm install --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 to the host
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]