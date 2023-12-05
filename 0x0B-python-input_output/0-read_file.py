#!/usr/bin/python3
"""Defines  text file-reading function."""


def read_file(filename=""):
    """Print the contents of UTF8 text file in  stdout."""
    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
