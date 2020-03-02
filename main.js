// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById("modal");
modal.classList.add("hidden");

let likesBtn = document.querySelectorAll(".like-glyph");

for (let i = 0; i < likesBtn.length; i++) {
  likesBtn[i].addEventListener("click", event => {
    mimicServerCall()
    .then(event => {
      if (likesBtn[i].innerHTML === EMPTY_HEART) {
          likesBtn[i].textContent = FULL_HEART
          likesBtn[i].classList.add("activated-heart");
        }
        else {
          likesBtn[i].innerHTML = EMPTY_HEART
          likesBtn[i].classList.remove("activated-heart");
        }
      })
      .catch(error => {
        modal.classList.remove("hidden")
        modal.textContent = error
        setTimeout(function () {
          modal.classList.add("hidden")
        }, 5000);
    })
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
