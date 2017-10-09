<?php
    // PHP 5 syntax

    // single-line comment
    # also a single-line comment
    /* multiple-lines comment block */

    # all key-words, functions and classes are NOT case-sensitive
    # all variable names are case-sensitive

    # basic data types, PHP does not declare variable data types
    $my_string = "a string";
    $my_int = 10;
    $my_float = 12;
    $my_bool = true;
    $my_array = array('first', 'second', 'third');
    $my_null = null;
    

    # PHP will parse a variable in a string
    $txt = "W3Schools.com";
    # output: I love W3Schools.com!
    echo "I love $txt!";
    # is equivalent to the line below
    echo "I love " . $txt . "!";


    # scopes
    # a function is NOT allowed to access a global variable
    $x = 5;
    function my_test() {
        # cannot access x here, this will rise an error
        # echo $x;
        # use GLOBALS array to access/mutate global variable
        echo $GLOBALS['x'];
        # static variable will store information cross function calls
        # the example below will remember how many times it's called
        # note: static variable is still local
        static $function_called = 0;
        $function_called++;
        echo $function_called;
    }
    my_test();


    # class and object
    class Car {
        # constructor
        function Car() {
            $this->model = "BMW";
        }
    }
    # create an object
    $my_car = new Car();
    # access a property
    echo $my_car->model;


    # string functions
    strlen("123");

    # count number of words
    str_word_count("Hello world!"); // outputs 2

    # reverse a string
    sttrev("123");

    # serach a word
    # return the index of the beginning of the word
    # return false if word is not found
    echo strpos("Hello world!", "world"); // outputs 6

    # replace a word in a string
    str_replace("replaced word", "new word", "base string");
    str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!

    # complete reference
    # https://www.w3schools.com/php/php_ref_string.asp

?>
