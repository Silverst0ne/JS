let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

const h2 = document.querySelectorAll('h2');
const par = document.querySelectorAll('p');
const graph = document.querySelectorAll('.graph');

for (let i = 0; i < crypto.length; i++){
  h2[i].innerHTML = crypto[i].name;
  par[i].innerHTML = crypto[i].price;
  graph[i].style.width = crypto[i].price + "px";
  graph[i].style.height = "50px";
  graph[i].style.backgroundColor = "green";

}
