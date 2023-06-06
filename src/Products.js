import React from 'react'

const Products = () => {
    let Phones = [
        {id:"Iphone 14 Pro Max Purple",price:"#1,100,000",imagesource:"https://cdn.shopify.com/s/files/1/0269/6580/3031/products/jgdvbhc_1024x1024.jpg?v=1663700784"},
        {id:"Iphone 11 White",price:"#1,000,000",imagesource:"https://www.phonemart.ng/wp-content/uploads/2021/04/images-24-2.jpeg"},
        {id:"Iphone 14 Plus White",price:"#1,000,000",imagesource:"https://www.phonemart.ng/wp-content/uploads/2023/04/IMG-20230420-WA0015.jpg.webp"},
        {id:"Iphone 13 mini",price:"#1,000,000",imagesource:"https://ogabassey.com/wp-content/uploads/2022/04/iphone_13_PNG27.png"}
        
    ]
   

  return (
    <div className='Container'>
        {
            Phones.map(function(phone){
                return (
                    <div className='Box'><br/>
                        <img className='images' src={phone.imagesource} style={{width:"150px",height:"170px"}}/>
                       <p className='p-one'>{phone.id}</p>
                       <p className='p-two'>{phone.price}</p>
    
                    </div>
                )
    
            })
        }

    </div> 
    
  )
}

export default Products