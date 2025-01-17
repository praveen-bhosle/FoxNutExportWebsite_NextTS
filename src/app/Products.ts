 
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
    Small , 
    Medium ,
    Large, 
    Jumbo
}

interface Product { 
    size:string , 
    sizeString: string  ,
    quality: string 
    price:string  ,
    addedToCard?:false  , 
    quantityAdded?: 0  , 
    image: string
}
 
let Products: Product[] = [ ] ; 

let count = 0 ; 
for(let i = 0 ; i< 4 ; i++) {  
    for(let j = 0 ; j<3 ;j++) { 
      let product:Product = { 
    size: SizeEnum[i] , 
    sizeString:SizeStringEnum[i] , 
    quality:QualityEnum[j] , 
    price:  '$100'  , 
    image: Images[count] ,
       } 
    Products.push(product) ; 
    count++; 

    }
}

console.log(Products) ; 

export default Products; 