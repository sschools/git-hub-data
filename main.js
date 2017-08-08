function getData() {
  return fetch("https://api.github.com/users/sschools")
  .then (function(response){
    return response.json();
  });
}

let target = document.getElementById("info");
let head = document.getElementById("header");
let bio = document.getElementById("bio");
let html = "";
let bioHtml = "";

function buildHtml(me) {
  html = `
    <h2>The Basics</h2>
    <div class="info-element">
    <p>Name: <span>${me.name}</span></p>
    <p>GitHub URL: <span>${me.url}</span></p>
    <p>Email: <span>${me.email}</span></p>
    <p>Company: <span>${me.company}</span></p>
    <p>Website: <span>${me.html_url}</span></p>
    </div>
  `;

  bioHtml = `
    <h2>The Story</h2>
    <div class="bio-element">
    <p>Here's the story, of a man named Brady,
      Who was busy with three boys of his own,
      They were four men, living all together,
      Yet they were all alone.
      Till the one day when the lady met this fellow
      And they knew it was much more than a hunch,
      That this group must somehow form a family.
      That's the way we all became the Brady Bunch. </p>
      <img src="${me.avatar_url}" class="w3-circle"/>
    </div>
  `

  target.innerHTML = html;
  head.innerHTML = `<h1>${me.name}</h1>`;
  bio.innerHTML = bioHtml;
}

getData().then(function(data){
  buildHtml(data);
});
