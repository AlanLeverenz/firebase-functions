const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});

// say hello function call
// select button with 'call' class
// add eventListener for a 'click'
const button = document.querySelector('.call');
button.addEventListener('click', () => {
  // get function reference
  // firebase functions was imported into html.index file
  const sayHello = firebase.functions().httpsCallable('sayHello');
  sayHello({ name: 'alan' }).then(result => {
    console.log(result.data)
  })
});
