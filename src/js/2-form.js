const form = document.querySelector(`.feedback-form`);
const textarea = form.querySelector(`textarea`);
const input = form.querySelector(`input`);
const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", onFormInput);
form.addEventListener("submit", handlerSubmit);

populateForm();

function onFormInput() {
  const formData = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const {email, message} = JSON.parse(savedData)
    input.value = email;
    textarea.value = message;
  }
}

function handlerSubmit(event){
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email) {
    alert('Будь ласка, заповніть поле Email.');
    return;
  }

  if (!message) {
    alert('Будь ласка, заповніть поле Message.');
    return;
  }

  const formData = {email, message};
  
  console.log(formData)
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)
}