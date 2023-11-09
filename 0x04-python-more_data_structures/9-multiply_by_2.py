#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    new_dic = {}

    for i in a_dictionary:
        new_value = (a_dictionary.get(i)) * 2
        new_dic.update({i, new_value})
    return (new_dic)
