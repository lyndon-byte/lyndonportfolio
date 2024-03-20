var form = document.getElementById('sheetdb-form')

form.addEventListener('submit', e => {
  e.preventDefault();
   
  fetch(form.action,{

    method: "POST",
    body: new FormData(document.getElementById('sheetdb-form')),

  }).then(

   response => response.JSON

  ).then((html) => {

    

      document.getElementById('name').value = ''
      document.getElementById('message').value = ''
      document.getElementById('phone').value = ''
      document.getElementById('email').value = ''
      const alertPlaceholder = document.getElementById('messagesentAlertPlaceholder')
          const appendAlert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
              `<div class="alert alert-${type} alert-dismissible " role="alert" id="messagesentAlertPlaceholder" style="font-size: 15px">`,
              `   <div>${message}</div>`,
              '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
              '</div>'
            ].join('');
  
            alertPlaceholder.append(wrapper);
        }
  
        appendAlert('Your inquiry was successfully sent!', 'success');

  });

});

function showPopupScreen(){

  var width = window.screen.width * 0.75;

// Calculate the height of the window to cover 75% of the screen
  var height = window.screen.height * 0.75;

  // Open a new window with the calculated width and height
  var popup = window.open('', 'popup', 'width=' + width + ',height=' + height);

  // Check if the popup was blocked
  if (!popup) {
  alert('Please allow pop-ups for this site to see the example.');
  } else {
  // Add content to the popup window
  popup.document.write('<html><head><title>Popup Window</title></head><body><h1>Popup Window Content</h1></body></html>');
} 
}

// document.addEventListener("DOMContentLoaded", function() {
//   // Show the preview modal when the page loads
//   document.querySelector(".preview-modal").style.display = "block";
// });