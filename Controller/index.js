
(function () {
     let loginBtn = document.getElementById("logb").addEventListener("click", loadLogin);
     let registerBtn = document.getElementById("regb").addEventListener("click", loadRegister);
     let homepage = document.getElementById("homepage").addEventListener("click", loadHomepage);
     let favpage = document.getElementById("favpage").addEventListener("click", loadFavPage);
     if (localStorage.getItem("logged") != null) {
          document.getElementById("logb").innerText="Logout";
          loadHomepage();
     }
     else {
          loadLogin();
          hideNav();
     }

})();