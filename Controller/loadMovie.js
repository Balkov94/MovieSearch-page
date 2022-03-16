function loadMovie(event) {
     event.preventDefault();
     let listContainer = document.getElementById("listContainer");
     let eventValue = event.target.innerText;
     let movieContainer = document.getElementById("movieContainer");
     //cleanUp containers
     listContainer.innerText = "";
     movieContainer.innerHTML = "";

     // get user from lcoal to check status fav or not
     let logged = localStorage.getItem("logged");
     let allUsers = JSON.parse(localStorage.getItem("users"));
     let currUser = allUsers.find(e => e.name === logged);
     let currUserFavList = currUser.favList;

     fetch("http://www.omdbapi.com/?apikey=737c9a8f&s=" + eventValue)
          .then(res => res.json())
          .then(movies => {
               movies.Search.forEach(element => {
                    //add movie card to moveiContainer
                    fetch("./View/movieCard.hbs")
                         .then(res => res.text())
                         .then(movieCard => { //return str moviecard
                              let template = Handlebars.compile(movieCard); //make tamplete over strmovieCard
                              let html = template(element) //put obj movie in template
                              // !!! PLAIN TEXT TO HTML method!!!
                              movieContainer.insertAdjacentHTML("afterbegin", html)
                              //each card add eventlistener for add to fav or remove from fav

                              if (currUserFavList.indexOf(element.imdbID)!=-1) {
                                   document.getElementById(`favBtn-${element.imdbID}`).innerText = "Remove";
                                   document.getElementById(`favBtn-${element.imdbID}`)
                                        .addEventListener("click", removeFromFav);
                              }
                              else {
                                   document.getElementById(`favBtn-${element.imdbID}`)
                                        .addEventListener("click", addToFav);
                              }

                         });
               });
          })
}



