#!/bin/sh

OBJ='{"error":%s, "toatal":%s, "success":%s}'
TOTAL=0
SUCCESS=0
if [ -e ./user_exe ]
then
    rm -f ./user_exe
fi
clang -Wextra -Wall -Werror ./tests/$1/main.c ft_atoi.c -I./ -o user_exe
if [ ! -e ./user_exe ]
then
    echo $(printf "${OBJ}" "1" "${TOTAL}" "${SUCCESS}")
    exit 1;
fi

cd tests/$1
test_count=$(ls -l *.output | wc -l)
TOTAL=${test_count}
let "k=1"
while [ $k -le $test_count ]
do
    text=""
    if [ $k -lt 10 ]
    then
        text="0"
    fi
    if [ $(( $k%2 )) -eq 1 ] && ([ $1 == "ft_putchar_fd" ] || [ $1 == "ft_putstr_fd" ] || [ $1 == "ft_putendl_fd" ] || [ $1 == "ft_putnbr_fd" ])
    then
        ../../user_exe $k > /dev/null 2> user_output_test${text}$k
    else
        ../../user_exe $k > user_output_test${text}$k
    fi
    SIG=$?
    if [ $SIG -ne 0 ]
    then
        echo $(printf "${OBJ}" "${SIG}" "${TOTAL}" "${SUCCESS}")
        exit $SIG;
    fi
    DIFF=$(diff user_output_test${text}$k test${text}$k.output)
    if [ "$DIFF" == "" ] && [ -e user_output_test${text}$k ]
    then
        SUCCESS=$((SUCCESS+1))
    fi
    let "k+=1"
done
echo $(printf "${OBJ}" "0" "${TOTAL}" "${SUCCESS}")