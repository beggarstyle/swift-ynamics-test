FROM node:14-alpine3.12 AS isBuild

RUN apk update && apk add curl git vim zsh && \
  /bin/sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

WORKDIR /var/www/app

COPY ./ .

RUN npm i -g @nestjs/cli

RUN yarn

FROM isBuild AS isDependenies

CMD ["yarn", "start:debug"]
