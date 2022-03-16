function removeFromFav(event) {
     event.preventDefault();
     let targetFullID = event.target.id;
     let slitArr = targetFullID.split("-");
     let id = slitArr[1];

     let loggedName = localStorage.getItem("logged");
     let allUsers = JSON.parse(localStorage.getItem("users")); //arr of obj users
     let updatedUsers = allUsers.map(e => {
          if (e.name === loggedName) {
               if (e.favList.some(e => e == id)) {
                    let indexID = e.favList.indexOf(id);
                    e.favList.splice(indexID, 1);

                     //after added to local change button text and function
                     event.target.innerHTML="Like";
                     event.target.removeEventListener("click", removeFromFav);
                     event.target.addEventListener("click",addToFav);
               }
          }
          return e;
     })
     localStorage.setItem("users", JSON.stringify(updatedUsers));


}