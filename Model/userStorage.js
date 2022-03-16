
let userStorage = (function () {
     class User {
          constructor(name, pass) {
               this.name = name;
               this.pass = pass;
               this.favList = [];
          }

     }
     class UserStorage {
          // constructor___________________________
          constructor() {
               if (localStorage.getItem("users")) {
                    this.users = JSON.parse(localStorage.getItem("users"));
               }
               else {
                    this.users = [
                         new User("s", "s"),
                         new User("second", 123)
                    ];
               }
               //add localStorage interaction
               localStorage.setItem("users", JSON.stringify(this.users));
          }

          // Methods_________________________________
          register(name, password) {
               if (this.users.some(e => e.name == name)) {
                    alert("This username is already taken");
                    return false;
               }
               else {
                    alert(`Successful registration! ->${name}`);
                    this.users.push(new User(name, password));
                    localStorage.setItem("users", JSON.stringify(this.users));
                    return true;
               }
          }
          login(name, password) {
               if (this.users.some(e => e.name == name && e.pass == password)) {
                    alert("Successful login");
                    localStorage.setItem("logged", name);
                    return true;
               }
               else {
                    alert("Wrong username or password")
                    return false;
               }
          }
     }

     return new UserStorage;
})()

// let someUserStorage = new UserStorage();
// console.log(someUserStorage.users);

// someUserStorage.register("nov1",123);
// someUserStorage.login("nov1",123);
// someUserStorage.login("paca",123)
// console.log(someUserStorage.users);