FROM    centos:centos7

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
# RUN     yum install -y epel-release
# Install Node.js and npm
RUN curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -
RUN yum install -y nodejs gcc-c++ make

#RUN     yum install -y nodejs npm

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

#RUN npm install -g webpack

# Bundle app source
COPY . /src

EXPOSE  8080

WORKDIR /src
CMD npm run start
