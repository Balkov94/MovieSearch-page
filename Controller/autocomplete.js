function loadAutocomplete(event) {
     //debouced DON'T HAVE event.target
     // let target = event.target;
     // let inputValue = target.value;
     let inputValue = document.getElementById("search").value;
     //737c9a8f  -> api key for OMDBAPI
     let listcontainer = document.getElementById("listContainer");
     listcontainer.innerText = "";
     fetch("http://www.omdbapi.com/?apikey=737c9a8f&s=" + inputValue)
          .then(res => res.json())
          .then(data => {
               if(data.Error && inputValue!=""){
                    alert(`Error:${data.Error}`);
                    return;
               }
               data.Search.forEach(element => {
                    let li = document.createElement("li");
                    //li.className = "list-group-item list-group-item-action ";
                    //li.className = "list-group-item list-group-item-action text-light bg-dark";
                    li.className = "list-group-item text-light bg-dark";
                    li.innerText = element.Title;
                    listcontainer.append(li);
                    li.addEventListener("click",loadMovie)
               });
          })
}
// loadAutocomplete function => debounce
let dobounceAutocomp = debounce(loadAutocomplete, 400);

function debounce(func, delay) {
     let timerID;
     return function () {
          clearTimeout(timerID);
          timerID = setTimeout(func, delay);
     }
}

