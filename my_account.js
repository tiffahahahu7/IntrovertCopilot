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

//payment edit button
const paymentEdit = document.getElementById('payment_edit')
const paymentInput = document.getElementsByName('credit_card')[0]
const savePaymentInfo = document.getElementById('save_payment_edit')

paymentEdit.addEventListener("click", function() {
  paymentInput.removeAttribute("disabled")
  savePaymentInfo.classList.remove('hidden')
  savePaymentInfo.style.backgroundColor = '#ff5757'
  savePaymentInfo.style.borderColor = '#ff5757'
})

//payment save button
const $payment_form = document.getElementById('payment_form')
$payment_form.addEventListener('submit',(e) => {
  e.preventDefault()
  const creditCard = document.getElementsByName('credit_card')[0].value
  if(creditCard.length === 12 && !isNaN(creditCard)) {
    localStorage.setItem('paymentInfo', JSON.stringify(creditCard))
    paymentInput.value = `********${creditCard.slice(-4)}`
    paymentInput.setAttribute('disabled', true)
    savePaymentInfo.classList.add('hidden')
    loadPaymentInfo()
  } else {
    alert('Please enter a valid 12-digit credit card number')
  }
})

function loadPaymentInfo() {
  if(localStorage.getItem('paymentInfo')) {
    const paymentInfo = JSON.parse(localStorage.getItem('paymentInfo'))
    paymentInput.value = `********${paymentInfo.slice(-4)}`
  } else {
    paymentInput.value = '********9999'
  }
}

loadPaymentInfo()

// Retrieve existing messages from localStorage
let savedMsgs = JSON.parse(localStorage.getItem('savedMsgs')) || [];

for (let i = 0; i < savedMsgs.length; i++) {
  const savedMsgDiv_block = document.createElement('div')
  savedMsgDiv_block.classList.add('savedMsgDiv_block')
  const savedMsgDiv = document.createElement('div');
  savedMsgDiv.textContent = savedMsgs[i];

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('deleteBtn'); 
  deleteBtn.addEventListener('click', function() {
    savedMsgs.splice(i, 1);
    localStorage.setItem('savedMsgs', JSON.stringify(savedMsgs));
    savedMsgDiv.remove();
    deleteBtn.remove();
    savedMsgDiv_block.remove();
  });

  savedMsgDiv_block.appendChild(savedMsgDiv)
  savedMsgDiv_block.appendChild(deleteBtn)
  document.getElementById('saved_msg').appendChild(savedMsgDiv_block);
}
