FROM    ubuntu:14.04

# Add PPA
RUN     apt-get install -y curl
RUN     curl -sL https://deb.nodesource.com/setup | sudo bash -

# Install Node.js
RUN     apt-get install -y nodejs
RUN     apt-get install -y build-essential

COPY . /var/www/node

# Install app dependencies
RUN cd /var/www/node; npm install

EXPOSE  3000

CMD ["node", "/var/www/node/init.js"]
