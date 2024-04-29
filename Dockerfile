# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application to the container at /app
COPY . .

# Make port 5173 available to the outside of the Docker container
EXPOSE 5173

# Run the application when the container launches
CMD ["npm", "run", "dev", "--host", "0.0.0.0"]
