function addToFav(event) {
     event.preventDefault();
     console.log(event.target);
     let targetFullID = event.target.id;
     let slitArr = targetFullID.split("-");
     let id = slitArr[1];

     let loggedName = localStorage.getItem("logged");
     let allUsers = JSON.parse(localStorage.getItem("users")); //arr of obj users
     let updatedUsers = allUsers.map(e => {
          if (e.name === loggedName) {
               if (e.favList.some(e => e == id)) {
                   
                    console.log("ALready to favourites");
               }
               else {
                    e.favList.push(id);
                    //after added to local change button text and function
                    event.target.innerHTML="Remove";
                    event.target.removeEventListener("click", addToFav);
                    event.target.addEventListener("click",removeFromFav);
               }
              
          }
          return e;
     })
     localStorage.setItem("users",JSON.stringify(updatedUsers));

 
}