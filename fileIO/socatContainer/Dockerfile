FROM ubuntu:trusty

RUN apt-get update && apt-get install -y socat
RUN echo "legacy file" > legacy.txt
CMD socat TCP4-LISTEN:9001,fork SYSTEM:'cat legacy.txt'
