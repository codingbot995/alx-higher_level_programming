#!/usr/bin/python3
"""Defines an inherited list class MyList."""


class MyList(list):
    """Implements sorted printing for built-in list class."""

    def print_sorted(self):
        """Print a list in  a sorted ascending order."""
        print(sorted(self))
