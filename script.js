document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        const info = this.parentElement.nextElementSibling;
        info.classList.toggle('active');
        
        const buttonText = info.classList.contains('active') ? 'Hide Info' : 'Show Info';
        this.textContent = buttonText;
      });
    });
  });

// Modal
document.addEventListener('DOMContentLoaded', function () {
    const termsModal = document.getElementById('termsModal');
    const agreeButton = document.getElementById('agreeButton');

    termsModal.style.display = 'block';

    agreeButton.addEventListener('click', function () {
        termsModal.style.display = 'none'; 
    });

});
