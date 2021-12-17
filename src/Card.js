import React from 'react'
import './Card.css'

 const Card=(props) =>
 {
     const deleteOne=(id)=>{
        let empArr=[];
         props.sendState.forEach((item)=>{
              if(item.id !== id){
                  empArr.push(item)
                  
              }
         })
         props.sendChangeState(empArr)
     }
    return (
        <>
        {
            props.details.map((item)=>{
                return(
                    <div className='main' key={item.id}>
                        <div className='one'>
                           <h2 >{item.id}.<br/> Name -{item.name} <br/>Age -{item.age} <br/>
                           <button className="btn-2" onClick={()=>deleteOne(item.id)}>Delete</button>
                           </h2>
                           
                        </div>

                    </div>
                )
            })
        }
        </>
    )
}

export default Card;
