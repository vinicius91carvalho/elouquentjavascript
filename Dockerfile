# Use the official Ubuntu base image
FROM ubuntu:24.10

# Update package list and install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    build-essential

# installs nvm (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Set environment variables for nvm and install Node.js
RUN export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && \
    nvm install 22

# Ensure nvm and node are available in the PATH
ENV NVM_DIR="$HOME/.nvm"
ENV PATH="$NVM_DIR/versions/node/v22.0.0/bin:$PATH"