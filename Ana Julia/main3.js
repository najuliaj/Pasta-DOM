// JavaScript e DOM
// objeto document
console.log(document);

//Acessar informações
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o titulo
document.title = 123;
// Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos!';
document.body.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';
