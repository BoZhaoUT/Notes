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
