FROM ubuntu:14.04 

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs

COPY App /src

RUN cd /src; npm install

CMD ["node", "/src/main.js"]
