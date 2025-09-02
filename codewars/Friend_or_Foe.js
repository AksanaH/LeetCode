// <!-- Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not... -->
// <!-- 
// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = [] -->

function friend(friends) {
  const result = friends.filter((word) => word.length === 4);
  return result;
}

console.log(friend(["Ryan", "Kieran", "Mark", "Stephen"])); 