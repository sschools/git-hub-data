function getData() {
  return fetch("https://api.github.com/users/sschools")
  .then (function(response){
    return response.json();
  });
}
let myData = getData();
console.log(myData);
