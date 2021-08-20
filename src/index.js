'use strict';
const products =  {
     datos : [
        {
            id: 1,
            name: 'Lomo Saltado',
            price: 12.5
        },
        {
            id: 2,
            name: 'Arroz a la cubana',
            price: 8.5
        },
        {
            id: 3,
            name: 'Pizza Vegetariana',
            price: 25.5
        },
        {
            id: 4,
            name: 'Pato en aji',
            price: 25.5
        },
        {
            id: 5,
            name: 'Arroz chaufa',
            price: 25.5
        },
        {
            id: 6,
            name: 'Pollo a la cacerola',
            price: 25.5
        },
        {
            id: 7,
            name: 'Pollo a la brasa',
            price: 25.5
        },
        {
            id: 8,
            name: 'Pollo a la olla',
            price: 45.5
        }
    ]
}

module.exports.getProducts =  () => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: products,
    };
    return response;
};


