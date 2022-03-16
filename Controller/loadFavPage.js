function loadFavPage() {
     // clear all DOM tree before load favourites
     let container = document.getElementById("movieContainer");
     container.innerHTML = "";
     let homepageForm = document.getElementById("homepage-form");
     if(homepageForm){
          homepageForm.remove();
     }
     if (document.getElementById("listContainer")) {
          document.getElementById("listContainer").remove();
     }
     //get movie card with singlefetch
     let currUser = (JSON.parse(localStorage.getItem("users")))
          .find(e => e.name === localStorage.getItem("logged"));
     let currUserFavList = currUser.favList;
   
     //add title div Favourite pages
     //!!!! HACK-FIX .insertAdjacentHTML("beforebegin"   ->  skip async/await
     if(!document.getElementById("fav-title-container")){
          fetch("./View/favouritesText.hbs")
          .then(res => res.text())
          .then(data => {
               container.insertAdjacentHTML("beforebegin", data)
          })
     }
   
     currUserFavList.forEach(movieID => {
          fetch(`http://www.omdbapi.com/?apikey=737c9a8f&i=${movieID}`)
               .then(res => res.json())
               .then(data => {
                    fetch("./View/movieCard.hbs")
                         .then(movieCard => movieCard.text())
                         .then(movieCard => {
                              let template = Handlebars.compile(movieCard); //make tamplete over strmovieCard
                              let html = template(data) //put obj movie in template
                              container.insertAdjacentHTML("afterbegin", html)

                              if (currUserFavList.indexOf(movieID != -1)) {
                                   document.getElementById(`favBtn-${movieID}`).innerText = "Remove";
                                   document.getElementById(`favBtn-${movieID}`)
                                        .addEventListener("click", removeFromFav);
                                   document.getElementById(`favBtn-${movieID}`)
                                        .addEventListener("click", loadFavPage);
                              }
                              else {
                                   document.getElementById(`favBtn-${movieID}`)
                                        .addEventListener("click", addToFav);
                                   document.getElementById(`favBtn-${movieID}`)
                                        .addEventListener("click", loadFavPage);
                              }
                         })
               })
     })
}






