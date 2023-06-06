import React from 'react'


const Laptops = () => {
    let Laptop = [
        {id:"MACBOOK AIR",price:"#450,000",imagesource:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80"},
        {id:"DELL LATITUDE",price:"#200,000",imagesource:"https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/laptop-category-latitude-14-9440-lf-rf-800x620.png"},
        {id:"ACER AIR",price:"#1,000,000",imagesource:"https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg"},
        {id:"HP PAVILION",price:"#1,000,000",imagesource:"https://solaroidenergy.com/wp-content/uploads/2023/02/the-best-laptop-in-india-1.jpg"}
        
    ]
   

  return (
    <div className='Container'>
        {
            Laptop.map(function(Lappy){
                return (
                    <div className='Box'> <br/>
                        <img className='images' src={Lappy.imagesource} style={{width:"150px",height:"160px"}}/>
                       <p className='p-one'>{Lappy.id}</p>
                       <p className='p-two'>{Lappy.price}</p>
    
                    </div>
                )
    
            })
        }

    </div> 
    
  )
}


export default Laptops