#!/bin/sh

FUNC=$(sed -n "/$1/p" libft.h)
FUNC='#include "libft.h"'"\n\n"${FUNC%?}"{\n\n}"
echo ${FUNC}
