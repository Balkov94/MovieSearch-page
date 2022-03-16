function loadRegister() {
     hideNav();
     document.getElementById("logb").innerText="Login";
     let container = document.getElementById("container");

     fetch("./View/registerpage.hbs")
          .then(res => res.text())
          .then(regPage => {
               container.innerHTML = regPage;
               registerUser();
          })

          function registerUser() {
               let registerBtn = document.getElementById("regButton");
               registerBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    let name = document.getElementById("name").value;
                    let pass = document.getElementById("pass").value;
          
                    if (userStorage.register(name, pass)) {
                         loadLogin();
                    }
               })
          }
}