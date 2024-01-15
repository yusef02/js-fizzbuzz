console.log("JS OK");

// creo la row che sarà la mia tabella  e le assegno le classi necessari
const fizzBuzzTableEl = document.createElement("div");
fizzBuzzTableEl.classList.add(
  "row",
  "row-cols-2",
  "row-cols-lg-6",
  "g-2",
  "g-lg-3",
  "justify-content-center"
);
console.log(fizzBuzzTableEl);

for (let i = 1; i <= 100; i++) {
  const colEl = document.createElement("div");
  colEl.classList.add("col-md-1");

  const cardEl = document.createElement("div");
  cardEl.classList.add("card", "bg-primary", "p-auto");
  cardEl.style.aspectRatio = "1";
  cardEl.style.lineHeight = "100%";
  const spanEL = document.createElement("span");
  spanEL.classList.add("align-middle", "d-inline");
  spanEL.style.aspectRatio = "1";
  spanEL.style.lineHeight = "100%";

  if (i % 15 == 0) {
    spanEL.innerHTML = `FizzBuzz`;
    spanEL.classList.add("bg-danger");
  } else if (i % 5 == 0) {
    spanEL.innerHTML = `Buzz`;
    spanEL.classList.add("bg-warning");
  } else if (i % 3 == 0) {
    spanEL.innerHTML = `Fizz`;
    spanEL.classList.add("bg-success");
  } else {
    spanEL.innerHTML = `${i}`;
  }

  cardEl.appendChild(spanEL);
  colEl.appendChild(cardEl);
  fizzBuzzTableEl.appendChild(colEl);
}

document.querySelector(".container > .col-md-8").appendChild(fizzBuzzTableEl);
