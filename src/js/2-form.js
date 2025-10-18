const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData = { ...formData, ...parsedData }; 

    if (formData.email) form.elements.email.value = formData.email;
    if (formData.message) form.elements.message.value = formData.message;
  } catch (err) {
    console.warn('Помилка при читанні даних з localStorage:', err);
  }
}


form.addEventListener('input', e => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});


form.addEventListener('submit', e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(' Form submitted:', formData);


  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
});
