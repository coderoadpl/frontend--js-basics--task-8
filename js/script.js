'use strict'

var car = {
    brand: 'Opel',
    model: 'Insignia'
}

var me = {
    firstName: 'Mateusz',
    lastName: 'Choma',
    car: car
}

me.name = me.firstName + ' ' + me.lastName

console.log(me.car.brand)
console.log(me.car.model)

console.log(me)