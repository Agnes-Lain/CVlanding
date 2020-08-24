// Javascript code from here

fetch('https://api.github.com/users/ssaunier')
  .then(response => response.json())
  .then(data => {
    console.log(`My name is ${data.name} and I work at ${data.company}`);
  });