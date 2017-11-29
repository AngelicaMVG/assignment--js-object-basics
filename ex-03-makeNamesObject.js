/**
 * makeNamesObject()
 *
 * Create a function that accepts 3 strings with first + last names as arguments
 * The function should return an object with 3 properties:
 * The first name will be a property-name and the last name will be the value
 *
 * EXAMPLE:
 * makeNamesObject("George Washington", "John Adams", "Kanye West")
 *   =>
 *   {
 *      George: "Washington",
 *      John: "Adams",
 *      Kanye: "West"
 *   }
 *
 * HINT: You may need to review `object bracket notation` to dynamically
 *       set an object's property name.
 *
*/
function makeNamesObject(str1, str2, str3) {
  var name1 = str1.split(" ");
  var name2 = str2.split(" ");
  var name3 = str3.split(" ");

  var newObj = {
    [name1[0]]: name1[1],
    [name2[0]]: name2[1],
    [name3[0]]: name3[1]
  };
  return newObj;
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject(
  "George Washington",
  "Abe Lincoln",
  "Kanye West"
);
var greatWomenObj = makeNamesObject(
  "Rosa Parks",
  "Amelia Earhart",
  "Charlotte Webb"
);

console.assert(greatMenObj.George === "Washington");
console.assert(greatMenObj["Abe"] === "Lincoln");
console.assert(greatMenObj.Kanye === "West");
//-------------------
console.assert(greatWomenObj.Rosa === "Parks");
console.assert(greatWomenObj.Charlotte === "Webb");
