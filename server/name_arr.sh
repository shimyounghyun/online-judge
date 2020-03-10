#!/bin/sh

TEMPLATE='{"list":[%s]}'
VALUE=""
DIRS_NAME=`cd tests && ls -l | grep "^d" | awk '{print $9}'`

for i in ${DIRS_NAME}
do
	VALUE=${VALUE}' "'$i'",'
done
VALUE="${VALUE%?}"
JSON_STRING=$(printf "$TEMPLATE" "$VALUE")
echo "$JSON_STRING"
