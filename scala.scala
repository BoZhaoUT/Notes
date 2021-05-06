// data types
// AnyVal
// Double, Float, Int, Short, Byte
// Char
// Boolean
// Unit

// AnyRef
// Object
// Seq
// List
// String

val num = 5             // Int
val decimal = 5.13      // Double
var x = 1 + 2 + 3.5     // Double, mixing double and int will get double
List(1, 2, 3.5)         // List[Double], same as above
List(1, true)           // List[AnyVal], mixing Int and Boolean will get AnyVal
List(1, true, "peggy")  // List[any], mixing AnyVal and AnyRef will get Any


// cons operator
// the type is List[Int]. Nil is not part of the list, it indicates the end of a list
val numbers = 1::2::3::4::Nil


// read from stdin
import io.Stdin._

var name = readLine()
var double = readDouble()
var bool = readBoolean()


// file IO
import io.Source._

object readFromFiles extends App {
  var filename = "/src/rainbow.txt"
  for (line <- fromFile(filename).getLines()) {
    println(line)
  }

  // read file into a list and print it line by line
  var lines = fromFile("src/poem.txt").getLines.toList
  lines.foreach(println)
}


// try catch
try {
  10 / 0
} catch {
  case e.ArithmeticException => println("cannot divide by 0")
  case _:Exception => println("any other error")
}


// set
var set = Set(1, 2, 3, 4, 5)
println(set.contains(5))
set -= 5 // remove 5 from the set
println(set) // Set(1, 2, 3, 4)
set.head // gives the first element
set.tail // gives all the remaining elements
set.isEmpty // check whether a set is empty


// hashmap
var groceries = Map(
  1 -> "milk",
  2 -> "bread",
  3 -> "juice"
)
// add one more key-value pair
groceries+(4 -> "eggs")
// get an element
println(groceries(3)) // or groceries.get(3)
println(groceries.getOrElse(6, "no match"))


// tuples
val tuple = (1, 1.4, "hello")
// get an element by index
val x = tuple._3
// destructing
val (first, second, third) = tuple
