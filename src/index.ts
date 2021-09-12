import { formData } from "./forms";
// console.log(formData())
const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = formData(form);

  // to see if it works properly
  console.log(data);
});

// gotta throw an error to understand source maps
const person: any = {};
console.log(person.speak());
// well it showed in mozilla that the error was in index.ts because the eval 
// was used probably by default accord,ng to the notes in bundle.js
// still gonna add in configs to understand how to handle source maps