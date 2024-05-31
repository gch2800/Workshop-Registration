document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('button[type="submit"]');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      var workshopName = this.dataset.workshop;
      var sessionType = this.dataset.session;

      var formData = new FormData();
      formData.append('workshop', workshopName);
      formData.append('session', sessionType);

      fetch('C:/Users/garre/Downloads/puppet site/payment_processing_script.php', { // Modify the URL to your PHP script
        method: 'POST',
        body: formData
      })
      .then(function(response) {
        if (response.ok) {
          alert('Registration submitted successfully!');
        } else {
          alert('Error submitting registration. Please try again.');
        }
      })
      .catch(function(error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
    });
  });
});
