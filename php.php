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
    strrev("123");

    # serach a word
    # return the index of the beginning of the word
    # return false if word is not found
    echo strpos("Hello world!", "world"); // outputs 6

    # replace a word in a string
    str_replace("replaced word", "new word", "base string");
    str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!

    # complete reference
    # https://www.w3schools.com/php/php_ref_string.asp


    # constants
    # all constants are global
    define("var_name", "value"); // var name is case-sensitive
    define("var_name2", "value", true); // var name is case-insensitive


    # logical operators
    # PHP supports xor
    # and === &&
    # or === ||
    # use ! to negate a value

    # string operators
    # to concatenate two strings
    # use . and .=
    # "123" . "456" outputs "123456"
    # $txt1 .= $txt2


    # foreach loop
    $colors = array("red", "green", "blue", "yellow"); 
    
    foreach ($colors as $value) {
        echo "$value <br>";
    }

    # define functions
    # last_name is an optional parameter
    function full_name($first_name, $last_name = "Smith") {
        return "$first_name $last_name";
    }

    echo full_name("John", "Smith");

    # arrays
    # indexed array
    $cars = array("Volvo", "BMW", "Toyota");
    echo count($cars); // return the length of this array

    # for loop
    for($x = 0; $x < $arrlength; $x++) {
        echo $cars[$x];
        echo "<br>";
    }

    # associative array
    $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
    echo "Peter is " . $age['Peter'] . " years old.";

    foreach($age as $key => $value) {
        echo "Key=" . $key . ", Value=" . $value;
        echo "<br>";
    }

    # complete array reference
    # https://www.w3schools.com/php/php_ref_array.asp


    # superglobals
    # Returns the filename of the currently executing script
    echo $_SERVER['PHP_SELF']; // 
    # Returns the version of the Common Gateway Interface (CGI) the server is using
    echo $_SERVER['SERVER_NAME'];

    # complte reference
    # https://www.w3schools.com/php/php_superglobals.asp


    # submit and handle form request
    /*
    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
        Name: <input type="text" name="fname">
        <input type="submit">
    </form>
    */

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // collect value of input field
        $name = $_REQUEST['fname'];
        if (empty($name)) {
            echo "Name is empty";
        } else {
            echo $name;
        }
    }

?>
