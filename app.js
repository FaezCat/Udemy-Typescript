// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Faez",
//   age: 28,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
// behind the scenes this enum assigns 0 to ADMIN, 1 to READ_ONLY, and 2 to AUTHOR
var person = {
    name: "Faez",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR
};
// person.role.push('admin');
// person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
