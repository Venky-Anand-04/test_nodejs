let data = document.querySelector("#data");
let signin = document.querySelector("#g-signin2");

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  document.getElementById("name").innerText = profile.getName();
  document.getElementById("image").src = profile.getImageUrl();
  document.getElementById("email").innerText = profile.getEmail();
  console.log("User Signed in");

  console.log("ID: " + profile.getId());
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  data.style.display = "block";
  signin.style.display = "none";
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
    data.style.display = "none";
    signin.style.display = "block";
  });
}
