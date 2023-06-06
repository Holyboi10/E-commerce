import React from 'react'

const Cars = () => {
        let Cars = [
            {id:"Peugeot 807 2011 Silver",price:"#1,000,000",imagesource:"https://www.motortrend.com/uploads/sites/10/2016/09/2017-lexus-es-350-sedan-angular-front.png"},
            {id:"Peugeot 807 2011 Silver",price:"#1,000,000",imagesource:"https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Lexus-ES.png"},
            {id:"Peugeot 807 2011 Silver",price:"#1,000,000",imagesource:"https://www.motortrend.com/uploads/sites/10/2016/09/2017-lexus-es-350-sedan-angular-front.png"},
            {id:"Peugeot 807 2011 Silver",price:"#1,000,000",imagesource:"https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Lexus-ES.png"}
            
        ]
       
    
      return (
        <div className='Container'>
            {
                Cars.map(function(car){
                    return (
                        <div className='Box'>
                            <img className='images' src={car.imagesource} style={{width:"150px",height:"170px"}}/>
                           <p className='p-one'>{car.id}</p>
                           <p className='p-two'>{car.price}</p>
        
                        </div>
                    )
        
                })
            }
            
    
    
        </div> 
    
        
            
        
      )
    }

export default Cars