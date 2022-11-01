// Metodo getElementById
let titulo = document.getElementById('titulo');
// Alterando o conteúdo do elemento
titulo.innerHTML = 'Olá meus caros alunos!';
// Configurando o estilo CSS do elemento
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';

// Método getElementsByClassName
let items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
    }

    // Método getElementsByTagName
let li = document.getElementsByTagName('li');
console.log(li);
for (let i = 0; i < li.length; i++) {
if (i % 2) li[i].style.backgroundColor = '#f4f4f4';
else li[i].style.backgroundColor = '#fff';
}

// Método getElementsByName
let nome = document.getElementsByName('fitem');
nome[0].textContent = 'Olá pessoas';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'Tudo bem?';
nome[1].style.backgroundColor = '#BAC1FB';

// Remove elemento do DOM
let item2 = document.getElementById('item2');
item2.remove();

// Retornando o elemento
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling);

// Alterando o estilo da lista
let ul = document.getElementById('items');
ul.style.listStyle = 'none'

//Marcadores numéricos
ul.style.listStyle = 'decimal inside';