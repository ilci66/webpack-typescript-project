import { formData } from "./forms";
// console.log(formData())
const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = formData(form);

  // to see if it works properly
  console.log(data);
});
console.log('yee')