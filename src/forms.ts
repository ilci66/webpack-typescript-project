// try to use this kind of fucntions more in the future for forms, seems useful 
export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input');
    // values object will take array of props, which are strings, value of each property is also string
    let values: {[prop: string]: string} = {};
  
    inputs.forEach(input => {
      values[input.id] = input.value;
    });
    return values;
  };