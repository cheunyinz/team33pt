const reviews = document.getElementsByClassName("review");
const spots = document.getElementsByClassName("addSpot");

for (let i = 0; i < reviews.length; i++) {
  reviews[i].addEventListener("submit", addReviewText);
}

for (let i = 0; i < spots.length; i++) {
  spots[i].addEventListener("submit", addSpot);
}

document.getElementById("submit-text-return").addEventListener("click", () => {
  document.getElementById("submit-text").style.display = "none";
});

document
  .getElementById("submit-favourite-return")
  .addEventListener("click", () => {
    document.getElementById("submit-favourite").style.display = "none";
  });

function addReviewText() {
  document.getElementById("submit-text").style.display = "initial";
}

function addSpot() {
  document.getElementById("submit-favourite").style.display = "initial";
}
