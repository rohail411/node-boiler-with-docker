FROM node:16

# Working dir
# WORKDIR 

# Copy files from Build
# COPY package*.json ./

# Install Globals

# COPY src
COPY . .

# Install Files
RUN npm install



# Build
# RUN npm start

# Expose Port
EXPOSE 3000

# Docker Commmand to start Service
CMD ["node", "index.js"]