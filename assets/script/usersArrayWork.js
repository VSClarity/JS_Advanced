const users = [
  { name: "John", age: 25, isMale: true },
  { name: "Jane", age: 30, isMale: false },
  { name: "Mike", age: 20, isMale: true },
  { name: "Emily", age: 27, isMale: false },
  { name: "Tom", age: 35, isMale: true },
];

function usersTask(usersList, minAge) {
  return usersList.filter(
    (u) => "name" in u && "age" in u && "isMale" in u && u.age > minAge,
  );
}

console.log(usersTask(users, 22));
