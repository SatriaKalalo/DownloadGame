let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

document.getElementById("button").addEventListener("click", function() {
    // Ganti URL di bawah URL tujuan Anda
    window.location.href = "file:///C:/Users/TES/Documents/buatansendiri/GameForm.html";
  });