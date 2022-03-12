FROM node:14-alpine3.12 AS isBuild

RUN apk update && apk add curl git vim python3 zsh && \
  /bin/sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

##
FROM isBuild AS isDependenies

WORKDIR /var/www/app

COPY ./ ./

RUN npm i -g @adonisjs/cli && npm install

###
FROM isDependenies AS isReleased

CMD ["adonis", "serve", "--dev"]