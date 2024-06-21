/*
 * This script controls the counter functionality of the webpage.
 *
 * The counter is displayed in the HTML element with the id "counter".
 * The buttons to increase and decrease the counter are found by their ids.
 *
 * The count is initialized to 0 when the page loads, and its value is updated
 * whenever the buttons are clicked.
 *
 * The counter value is displayed in the HTML element with the id "counter".
 */

// Query the HTML elements
const counter = document.querySelector("#counter")
const increaseBtn = document.querySelector("#increase-btn")
const decreaseBtn = document.querySelector("#decrease-btn")

// Initialize count
let count

// When the page loads, initialize count and display it
window.addEventListener("load", () => {
  count = 0
  counter.innerHTML = count
})

// When the increase button is clicked, increase count
increaseBtn.addEventListener("click", () => {
  count++
  counter.innerHTML = count
})

// When the decrease button is clicked, decrease count
decreaseBtn.addEventListener("click", () => {
  count--
  counter.innerHTML = count
})
