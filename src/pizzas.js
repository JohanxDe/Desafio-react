export const pizzas = [
    {
        nombre: "Margarita",
        ingredientes: ["tomate", "mozzarella", "albahaca"],
        precio: 24000,
        disponible: true,
        imagen: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
        nombre: "Pepperoni",
        ingredientes: ["tomate", "mozzarella", "pepperoni"],
        precio: 23000,
        disponible: true,
        imagen: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    },
    {
        nombre: "Cuatro Quesos",
        ingredientes: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
        precio: 22000,
        disponible: false,
        imagen: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    },
    {
        nombre: "Hawaiana",
        ingredientes: ["tomate", "mozzarella", "piña", "jamón"],
        precio: 15000,
        disponible: true,
        imagen: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
        nombre: "Vegetariana",
        ingredientes: ["tomate", "mozzarella", "pimientos", "aceitunas", "cebolla"],
        precio: 1000,
        disponible: true,
        imagen: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    },
    {
        nombre: "Italina",
        ingredientes: ["tomate", "jamon", "oregano", "aceitunas"],
        precio: 17000,
        disponible: false,
        imagen: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"

    }
];

// Ejemplo de cómo podrías utilizar el array de pizzas
pizzas.forEach(pizza => {
    console.log(`Pizza: ${pizza.nombre}`);
    console.log(`Ingredientes: ${pizza.ingredientes.join(", ")}`);
    console.log(`Precio: $${pizza.precio}`);
    console.log(`Disponible: ${pizza.disponible ? "Sí" : "No"}`);
    console.log("------------");
});