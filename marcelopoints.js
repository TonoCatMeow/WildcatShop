var counter = 0;

function incrementCounter() {
  counter++;
  localStorage.setItem("counter", counter);
}
