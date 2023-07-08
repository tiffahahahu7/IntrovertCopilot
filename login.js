//dark mode
const darkModeButton = document.getElementById('mymode');
const htmlRoot = document.querySelector('html');


darkModeButton.addEventListener('click', () => {
  if (htmlRoot.getAttribute('data-bs-theme') === 'dark') {
    htmlRoot.removeAttribute('data-bs-theme');
    darkModeButton.textContent = 'Dark mode'
  } else {
    htmlRoot.setAttribute('data-bs-theme', 'dark');
    darkModeButton.textContent = 'Light mode'
  }
});

//form validation
const $form = document.querySelector('#myloginform')
const $myemail = document.getElementById('myemail')
const $mypassword = document.getElementById('mypassword')
const $errorMessage = document.getElementById('errorMessage')
$form.addEventListener('submit', (e) => {
  e.preventDefault()
  if ($myemail.value != '' && $mypassword.value != '') {
    window.location.href = 'home.html'
  } else {
    $errorMessage.textContent = 'Please enter your email address and password!'
  }
})

$myemail.addEventListener('click', function () {
    $errorMessage.textContent = ''
  })

$mypassword.addEventListener('click', function () {
    $errorMessage.textContent = ''
  })

//remember me function
const rememberMeCheckbox = document.querySelector('#rememberme')
rememberMeCheckbox.addEventListener('change', () => {
  if (rememberMeCheckbox.checked) {
    console.log('hi')
    const email = $myemail.value
    const password = $mypassword.value
    localStorage.setItem('rememberedEmail', email)
    localStorage.setItem('rememberedPassword', password)
  }
})

const rememberedEmail = localStorage.getItem('rememberedEmail')
const rememberedPassword = localStorage.getItem('rememberedPassword')
if (rememberedEmail && rememberedPassword) {
  $myemail.value = rememberedEmail
  $mypassword.value = rememberedPassword
}


