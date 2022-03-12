#! /bin/bash

apt update && apt install -y vim

collection=("users")
for collect in ${collection[@]}; do
  mongoimport --authenticationDatabase admin \
    --username root \
    --password example \
    --db admin \
    --collection $collect \
    --file ./$collect.json \
    --jsonArray
done

# mongoimport --authenticationDatabase admin \
#     --username root \
#     --password example \
#     --db benchic \
#     --collection members \
#     --file ./collection/members.json \
#     --jsonArray

# use admin

# db.createUser({ user: "root", pwd: "password", roles: [ "root" ] })

# db.createUser({
# 	user: "root",
# 	pwd: "example",
# 	roles:[{ role: "userAdminAnyDatabase" , db:"admin" }]
# })
