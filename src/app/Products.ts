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

export interface Product { 
  
    sizeStringA: string  ,
    sizeStringB:string,
    quality: string 
    price:string  ,
    addedToCard:false  , 
    quantityAdded: 0  , 
    image: string
}
 


const Products: Product[] = [
    { 
      
      sizeStringA: '4 Suta' , sizeStringB:  '12mm to 15mm', 
      quality: 'Without Handpicked', 
      price: '₹870 / $14.62', 
      image: '/medium.png'  , 
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '4 Suta Plus', sizeStringB:'12mm above', 
      quality: 'Without Handpicked', 
      price: '₹1130 / $18.98', 
      image: '/medium.png' , 
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '5 Suta Exclusive', sizeStringB:'15mm to 19mm', 
      quality: 'Without Handpicked', 
      price: '₹1150 / $19.32', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
       
      sizeStringA: '5 Suta Plus', 
      
      sizeStringB:'15mm above', 
      quality: 'Without Handpicked', 
      price: '₹1200 / $20.16', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '5.5 Suta Plus', sizeStringB:'17mm above',  

      quality: 'Without Handpicked', 
      price: '₹1250 / $21.00', 
      image: '/medium.png' , 
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
     
      sizeStringA: '4 Suta',

      sizeStringB:'12mm to 15mm', 
      quality: 'Semi Handpicked', 
      price: '₹910 / $15.29', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
     
      sizeStringA: '4 Suta Plus', sizeStringB:'12mm above', 
      quality: 'Semi Handpicked', 
      price: '₹1180 / $19.82', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '5 Suta Exclusive',sizeStringB:'15mm to 19mm', 
      quality: 'Semi Handpicked', 
      price: '₹1210 / $20.33', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '5 Suta Plus',sizeStringB:'15mm above', 
      quality: 'Semi Handpicked', 
      price: '₹1250 / $21.00', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
     
      sizeStringA: '5.5 Suta Plus',sizeStringB:'17mm above', 
      quality: 'Semi Handpicked', 
      price: '₹1310 / $22.01', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
     
      sizeStringA: '6 Suta Plus',sizeStringB:'19mm above', 
      quality: 'Semi Handpicked', 
      price: '₹1400 / $23.52', 
      image: '/large.jpg' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '6.5 Suta Plus',sizeStringB:'20.5mm above', 
      quality: 'Semi Handpicked', 
      price: '₹1550 / $26.04', 
      image: '/large.jpg' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '4 Suta' ,sizeStringB:' 12mm to 15mm', 
      quality: 'Handpicked', 
      price: '₹950 / $15.96', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
     
      sizeStringA: '4 Suta Plus' ,sizeStringB:'12mm above', 
      quality: 'Handpicked', 
      price: '₹1225 / $20.58', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
     
      sizeStringA: '5 Suta Exclusive', sizeStringB:'15mm to 19mm', 
      quality: 'Handpicked', 
      price: '₹1250 / $21.00', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '5 Suta Plus',sizeStringB:'15mm above', 
      quality: 'Handpicked', 
      price: '₹1310 / $22.01', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '5.5 Suta Plus', sizeStringB:'17mm above', 
      quality: 'Handpicked', 
      price: '₹1350 / $22.68', 
      image: '/medium.png' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
     
      sizeStringA: '6 Suta Plus' , sizeStringB:'19mm above', 
      quality: 'Handpicked', 
      price: '₹1450 / $24.36', 
      image: '/large.jpg' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    },
    { 
      
      sizeStringA: '6.5 Suta Plus' ,sizeStringB: '20.5mm above', 
      quality: 'Handpicked', 
      price: '₹1600 / $26.88', 
      image: '/large.jpg' ,
      addedToCard:false  , 
      quantityAdded: 0  , 
    }
  ];
  






export default Products; 