// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById("modal")
modal.className = "hidden"

const toggleHearts = document.getElementsByClassName("like-glyph");

function heartCallback(element) {
  const heart = element.target;
  mimicServerCall("http://mimicServer.example.com")
  .then(function() {
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
    }
    else {
      heart.innerText = EMPTY_HEART;
    }
  })
  .catch(function(error) {
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000);
  })
}

for (const corazon of toggleHearts) {
  corazon.addEventListener("click", heartCallback);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
