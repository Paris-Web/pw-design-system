FROM node:9.3.0-alpine

# See https://github.com/jojomi/docker-hugo/blob/6890d77ac4acbf42ef3d67fae8774d3aad6e5252/Dockerfile
ENV HUGO_VERSION=0.31.1
RUN apk add --update wget ca-certificates && \
  cd /tmp/ && \
  wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  tar xzf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  rm -r hugo_${HUGO_VERSION}_Linux-64bit.tar.gz && \
  mv hugo /usr/bin/hugo && \
  apk del wget ca-certificates && \
  rm /var/cache/apk/*

WORKDIR /app

ENTRYPOINT ["npm"]
CMD ["--help"]