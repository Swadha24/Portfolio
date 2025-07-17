// EmailJS Integration
window.onload = function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted! Connect EmailJS for real delivery.');
  });
};
