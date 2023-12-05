#!/usr/bin/python3
"""Defines a file-writing function."""


def write_file(filename="", text=""):
    """Write a string to  UTF8 text file.

    Args:
        filename (str): The name of  file to write.
        text (str): The text  written to the file.
    Returns:
        The number of character written.
    """
    with open(filename, "w", encoding="utf-8") as f:
        return f.write(text)
