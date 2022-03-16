function loadLogin() {
     hideNav();
     document.getElementById("logb").innerText="Login";
     let container = document.getElementById("container");
     fetch("./View/loginpage.hbs")
          .then(res => res.text())
          .then(loginpage => {
               container.innerHTML = loginpage;

               // login functions

               let loginButton = document.getElementById("logButton");
               loginButton.addEventListener("click", function (e) {
                    e.preventDefault();
                    let name = document.getElementById("name").value.trim();
                    let pass = document.getElementById("pass").value.trim();
                    if (userStorage.login(name, pass)) {
                         document.getElementById("logb").innerText="Logout";
                         loadHomepage();
                    }
                    // let allUsers=JSON.parse(localStorage.getItem("users"));
                    // if(allUsers.some())
               })
          })



}

