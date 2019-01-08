FROM alpine:latest

ADD headless /headless
ENTRYPOINT ["./headless"]
