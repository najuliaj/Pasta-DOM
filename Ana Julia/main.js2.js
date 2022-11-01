function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
   }
   let x = addNums(4, 5); // Chamada da função addNums
   console.log(x);
   let z = myFunc(4, 5); // Chamada da função myFunc
   console.log(z);
   function myFunc(num1, num2) {
    return num1 * num2;
   }
   //Arrow functions
   const hello = () => {
return 'Olá Arrow Function!';
   };
   console.log(hello);
   console.log(hello());

   const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
    };
    let soma = addNums2(5, 10);
    console.log(soma);
   
    //Eventos
    const boasVindas = () => {
        alert('Bem vindo a nossa página');
        console.log('Bem vindo a nossa página');
        };
        const eventClique = () => {
        console.log('Você clicou no botão');
        };
        console.clear()

        console.clear()

        // Método forEach()
const frutas = ['apple', 'orange', 'cherry'];
frutas.forEach(minhaFuncao);
function minhaFuncao(item, index) {
console.log(`Índice: ${index}`);
console.log(`Elemento: ${item}`);
}

// Método forEach() com Arrow Function
const frutas01 = ['apple', 'orange', 'cherry'];
frutas01.forEach((index, item) => {
    console.log(`Índice: ${index}`);
    console.log(`Elemento: ${item}`);
    });

    // forEach() com array de objetos
    const tarefas = [
        {
        id: 1,
        texto: 'Levar o lixo para fora',
        isCompleted: true,
        },
        {
        id: 2,
        texto: 'Encontrar com o chefe',
        isCompleted: true,
        },
        {
        id: 3,
        texto: 'Consulta no dentista',
        isCompleted: false,
        },
        ];
        tarefas.forEach((teste) => console.log(teste.texto));

// Método map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);
console.clear();
console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

// Outro exemplo do map
const mapText = tarefas.map((valor) => {
    return valor.texto;
    });
    //Imprime o novo array
    console.log(mapText);

    // Método filter
    const idades = [32, 33, 16, 40];
let filtroIdade = idades.filter((idade) => {
return idade >= 18;
});
console.log(filtroIdade);

// Outro exemplo do filter
const filtoCompletas = tarefas.filter((item) => {
    return item.isCompleted === true;
    });
    console.log(filtoCompletas);

    // Método find()
console.clear();
const meuArray = [
{ nome: 'apples', quantidade: 2 },
{ nome: 'bananas', quantidade: 0 },
{ nome: 'cerejas', quantidade: 5 },
];
console.log(
meuArray.find((fruta) => {
return fruta.nome === 'cerejas';
})
);
