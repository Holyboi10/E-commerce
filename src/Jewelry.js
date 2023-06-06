import React from 'react'


const Jewelry = () => {
    let Jewels = [
        {id:"Iphone 14 Pro Max Purple",price:"#1,100,000",imagesource:"https://static-uc.olist.ng/upload/i03/20210510/1vvymagybksh.jpg"},
        {id:"Iphone 11 White",price:"#1,000,000",imagesource:"https://i.pinimg.com/originals/7e/4c/76/7e4c7604eb19594091f1a945f827d12d.jpg"},
        {id:"Iphone 14 Plus White",price:"#1,000,000",imagesource:"https://static-uc.olist.ng/upload/20200221/mutnjnrve2q.jpg"},
        {id:"Iphone 13 mini",price:"#1,000,000",imagesource:"https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/56/8590331/1.jpg?2535"}
        
    ]
   

  return (
    <div className='Container'>
        {
            Jewels.map(function(Jewel){
                return (
                    <div className='Box'><br/>
                        <img className='images' src={Jewel.imagesource} style={{width:"150px",height:"170px"}}/>
                       <p className='p-one'>{Jewel.id}</p>
                       <p className='p-two'>{Jewel.price}</p>
    
                    </div>
                )
    
            })
        }

    </div> 
    
  )
}


export default Jewelry