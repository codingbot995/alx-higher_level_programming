#include "lists.h"

/**
 * check_cycle - checks if the link list contains cycle
 * @list:To check link list 
 *
 * Return: 1 if list has a cycle, 0 if it doesn't
 */
int check_cycle(listint_t *list)
{
	listint_t *per = list;
	listint_t *test = list;

	if (!list)
		return (0);

	while (per && test && test->next)
	{
		per = per->next;
		test = test->next->next;
		if (per == test)
			return (1);
	}

	return (0);
}
