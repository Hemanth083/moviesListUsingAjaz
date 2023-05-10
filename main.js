const apiLink ="https://api.themoviedb.org/3/movie/76341?api_key=6c21ca3a9cab4453a4596e3a07c3301c&page=1";
const anotherLink =  "https://api.themoviedb.org/3/discover/movie?sort_by=popularaty.desc&api_key=6c21ca3a9cab4453a4596e3a07c3301c&page=93";
const OmdLink = "http://www.omdbapi.com/?i=tt3896198&apikey=4bdc165";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const searchApi ="https://api.themoviedb.org/3/search/movie?api_key=6c21ca3a9cab4453a4596e3a07c3301c&query=";
const container = document.getElementById("section");
const form = document.getElementById("form");
const search = document.querySelector("#quary");
returnMovie(anotherLink);

function returnMovie(url){
  fetch(url)
  .then(response =>{
    return response.json();
    })
    .then((data)=>{
        // console.log(data)
        data.results.forEach(function(element){
        const divCard = document.createElement("div");
        divCard.setAttribute("class","card");
        const divRow = document.createElement("div");
        divRow.setAttribute("class","row");
        const divCloumn = document.createElement("div");
        divCloumn.setAttribute("class","cloumn");
        const image = document.createElement("img");
        image.setAttribute("id","image");
        const title = document.createElement("h4");
        title.innerHTML = `${element.title}`;
        title.setAttribute("id","title");
        if(element.poster_path != null){
            image.src = imgPath + element.poster_path;
        }
        // console.log(image)
        divCard.appendChild(image);
        divCard.appendChild(title);
        divCloumn.appendChild(divCard);
        divRow.appendChild(divCloumn);
        container.appendChild(divRow)
      });   
    })
};

// function returnMovie(url){
//     fetch(url)
//     .then(response =>{
//       return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         (data.results)
//       if (Array.isArray(data.results)) {
//         console.log(data.belongs_to_collection)
//         for
//         data.belongs_to_collection.forEach(function (element){
//           const divCard = document.createElement("div");
//           divCard.setAttribute("class","card");
//           const divRow = document.createElement("div");
//           divRow.setAttribute("class","row");
//           const divColumn = document.createElement("div");
//           divColumn.setAttribute("class","column");
//           const image = document.createElement("img");
//           image.setAttribute("id","image");
//           const title = document.createElement("h4");
//           title.innerHTML = `${element.title}`;
//           image.setAttribute("id","title");
//           image.src = imgPath + element.backdrop_path;
//           console.log(image)
//           divCard.appendChild(image);
//           divCard.appendChild(title);
//           divColumn.appendChild(divCard);
//           divRow.appendChild(divColumn);
//           container.appendChild(divRow);
//         });
//       } else {
//         console.log('belongs_to_collection is not an array');
//       }
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   }
  
//   returnMovie(apiLink);
  
const f =document.querySelector("q");

form.addEventListener("submit", (e) => {
e.preventDefault();
container.innerHTML ='';
  const searchValue = search.value;
  console.log(search.value)
  if (searchValue) {
     returnMovie(searchApi + searchValue);
    search.value = "";
  }
  else{
    container.innerHTML ="not found"
  }
});

// function find(){
//     returnMovie(searchApi+ f);
//     console.log(searchApi,f)
// }
// find()