// Seleccionar los elementos del DOM necesarios
const $btnSignIn = document.querySelector('.sign-in-btn'), // Botón de inicio de sesión
      $btnSignUp = document.querySelector('.sign-up-btn'), // Botón de registro
      $signUp = document.querySelector('.sign-up'), // Formulario de registro
      $signIn = document.querySelector('.sign-in'); // Formulario de inicio de sesión

// Agregar un event listener para el evento de clic en todo el documento
document.addEventListener('click', e => {
    // Verificar si el elemento clickeado es el botón de inicio de sesión o el botón de registro
    if(e.target === $btnSignIn || e.target === $btnSignUp){
        // Alternar la clase 'active' en los formularios de inicio de sesión y registro
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});
