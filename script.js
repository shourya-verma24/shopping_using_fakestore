let container = document.getElementById("container")
let data = [];
function display_data(data){
  for(let i = 0; i<=data.length;i++){
    let card = document.createElement("div");
    card.className = "card";
    let image = document.createElement("img");
    let tital = document.createElement("h3");
    let price = document.createElement("p");
    let discription = document.createElement("p");
    let catogety = document.createElement("p")
    let rating = document.createElement("p");
    let count = document.createElement("p")

    //now we will assign inner text of the tags

    image.src = data[i].image;
    tital.innerText =  data[i].title;
    price.innerText = "Price : "+ data[i].price;
    discription.innerText = "About: "+ data[i].description;
    catogety.innerText = "Category: "+data[i].category;
    rating.innerHTML= "Ratings by users: "+(data[i].rating).rate;
    count.innerHTML = "Counts till now: " +(data[i].rating).count;

    //now append all the assigned values on containers 

    card.append(image,tital,price,discription,catogety,rating,count);
    container.append(card)
       
  }
    
}

fetch("https://fakestoreapi.com/products")
      .then(function(resolve){
        return resolve.json()
      })
            .then(function(res){
              console.log(res)
              display_data(res)
               })
