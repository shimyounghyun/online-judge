#include "libft.h"

t_list  *ft_lstnew(void *content)
{
    t_list *ret;

    if ((ret = (t_list *)malloc(sizeof(ret))) == 0)
        return (NULL);
    ret->content = content;
    return (ret);
}