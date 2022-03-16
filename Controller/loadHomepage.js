function loadHomepage() {
     let homepage=document.getElementById("homepage");
     let favPage=document.getElementById("favpage");
     homepage.style.display="block";
     favPage.style.display="block";
     let container = document.getElementById("container");
     fetch("./View/homepage.hbs")
          .then(res => res.text())
          .then(homepage => {
               //to write "Wolcome, {{logged user}}"
               let user = {
                    "name": localStorage.getItem("logged")
               }
               var source = homepage;
               var template = Handlebars.compile(source);
               let resultHtml = template(user);
               container.innerHTML = resultHtml;
               //add listeners to homepage
               let inputField = document.getElementById("search");
               inputField.addEventListener("input", dobounceAutocomp);
          })
}