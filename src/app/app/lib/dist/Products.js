"use strict";
/*
const Images:string[] = ['/small.webp' , '/small.webp' , '/small.webp','/medium.png','/medium.png','/medium.png','/large.jpg','/large.jpg','/large.jpg','/jumbo.png','/jumbo.png','/jumbo.png']

enum SizeStringEnum {
 '5-9 mm || 2-3 Suta'   ,
 '9-12 mm || 3.5-4 Suta',
 '12-16mm || 4-5 Suta',
 'More than 16mm ||  5 Suta'
}

enum QualityEnum{
    Handpicked ,
    SemiHandpicked,
    NonHandpicked

}

enum SizeEnum {
    
    Medium ,
    Large,
    ExtraLarge ,
    Jumbo
}
    */
exports.__esModule = true;
var Products = [
    {
        productId: 1,
        sizeStringA: '4 Suta',
        sizeStringB: '12mm to 15mm',
        quality: 'Without Handpicked',
        price: '₹870 / $14.62',
        image: '/m1.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 2,
        sizeStringA: '4 Suta Plus',
        sizeStringB: '12mm above',
        quality: 'Without Handpicked',
        price: '₹1130 / $18.98',
        image: '/m2.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 3,
        sizeStringA: '5 Suta Exclusive',
        sizeStringB: '15mm to 19mm',
        quality: 'Without Handpicked',
        price: '₹1150 / $19.32',
        image: '/m3.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 4,
        sizeStringA: '5 Suta Plus',
        sizeStringB: '15mm above',
        quality: 'Without Handpicked',
        price: '₹1200 / $20.16',
        image: '/m4.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 5,
        sizeStringA: '5.5 Suta Plus',
        sizeStringB: '17mm above',
        quality: 'Without Handpicked',
        price: '₹1250 / $21.00',
        image: '/m5.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 6,
        sizeStringA: '4 Suta',
        sizeStringB: '12mm to 15mm',
        quality: 'Semi Handpicked',
        price: '₹910 / $15.29',
        image: '/m6.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 7,
        sizeStringA: '4 Suta Plus',
        sizeStringB: '12mm above',
        quality: 'Semi Handpicked',
        price: '₹1180 / $19.82',
        image: '/m7.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 8,
        sizeStringA: '5 Suta Exclusive',
        sizeStringB: '15mm to 19mm',
        quality: 'Semi Handpicked',
        price: '₹1210 / $20.33',
        image: '/m8.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 9,
        sizeStringA: '5 Suta Plus',
        sizeStringB: '15mm above',
        quality: 'Semi Handpicked',
        price: '₹1250 / $21.00',
        image: '/m9.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 10,
        sizeStringA: '5.5 Suta Plus',
        sizeStringB: '17mm above',
        quality: 'Semi Handpicked',
        price: '₹1310 / $22.01',
        image: '/m10.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 11,
        sizeStringA: '6 Suta Plus',
        sizeStringB: '19mm above',
        quality: 'Semi Handpicked',
        price: '₹1400 / $23.52',
        image: '/m11.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 12,
        sizeStringA: '6.5 Suta Plus',
        sizeStringB: '20.5mm above',
        quality: 'Semi Handpicked',
        price: '₹1550 / $26.04',
        image: '/m12.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 13,
        sizeStringA: '4 Suta',
        sizeStringB: ' 12mm to 15mm',
        quality: 'Handpicked',
        price: '₹950 / $15.96',
        image: '/m13.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 14,
        sizeStringA: '4 Suta Plus',
        sizeStringB: '12mm above',
        quality: 'Handpicked',
        price: '₹1225 / $20.58',
        image: '/m14.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 15,
        sizeStringA: '5 Suta Exclusive',
        sizeStringB: '15mm to 19mm',
        quality: 'Handpicked',
        price: '₹1250 / $21.00',
        image: '/large.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 16,
        sizeStringA: '5 Suta Plus',
        sizeStringB: '15mm above',
        quality: 'Handpicked',
        price: '₹1310 / $22.01',
        image: '/jumbo.png',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 17,
        sizeStringA: '5.5 Suta Plus',
        sizeStringB: '17mm above',
        quality: 'Handpicked',
        price: '₹1350 / $22.68',
        image: '/handpicked.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 18,
        sizeStringA: '6 Suta Plus',
        sizeStringB: '19mm above',
        quality: 'Handpicked',
        price: '₹1450 / $24.36',
        image: '/m1.jpg',
        addedToCard: false,
        quantityAdded: 0
    },
    {
        productId: 19,
        sizeStringA: '6.5 Suta Plus',
        sizeStringB: '20.5mm above',
        quality: 'Handpicked',
        price: '₹1600 / $26.88',
        image: '/m8.jpg',
        addedToCard: false,
        quantityAdded: 0
    }
];
exports["default"] = Products;
