import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import {data} from '../helpers/data'

const PlayerCard = ({name,img,statistics}) => {

    const [showImage , setShowImage] = useState(true)

  return (

 <div>
     <Card style={{ width: '18rem' }}>
      <Card.Body onClick={()=> setShowImage(!showImage)} className='rounded-2 m-auto player-card  ' role='button'>
      {showImage ? (
       <Card.Img variant='top' src={img} className='player-logo text-center'/>)
      : (
         <ul>
            {statistics.map((item , i)=>{
                return(
                    <li className='h5 text-center list-unstyled ' key={i}>🎞️{item}</li>
                    )
                } )}
        </ul>
      )
       
        }
                <Card.Title>{name}</Card.Title>
       
      </Card.Body>
    </Card>
 </div>
  )
}

export default PlayerCard