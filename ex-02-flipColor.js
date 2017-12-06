/**
 * flipColor()
 *
 * Write a function called flipColor. This function may be
 * used to change the color of a tile in a game. It should
 * take as input an object. If that object's color property
 * has the value blue, it should change it to red, and
 * vice-versa.
*/

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var tileObj = {
  width: "200px",
  height: "200px",
  color: "blue"
};

function flipColor(object) {
  if (object.color === "blue") {
    object.color = "red";
  } else if (object.color === "red") {
    object.color = "blue";
  }
  return object;
}

var tileObj2 = flipColor(tileObj);

console.assert(tileObj2.color === "red");

var tileObj3 = flipColor(tileObj2);
console.assert(tileObj3.color === "blue");
