import React from 'react'
import { Card } from 'react-bootstrap'
import './index.scss'

function CardGhost( { image, title, h1Text, legendText, classGhost } ) {
  
  return (
    <section className="card-container">
        <Card className="bg-dark text-white">
            <Card.Img src={image} alt="Card image" />
            <div className={`card-ImgOverlay ${classGhost}`}>
                <Card.Title >{title}</Card.Title>
                <Card.Subtitle>
                    {h1Text}
                </Card.Subtitle>
                <Card.Text>{legendText}</Card.Text>
                {/* <Card.Title className={classGhost}>{title}</Card.Title>
                <Card.Subtitle className={classGhost}>
                    {h1Text}
                </Card.Subtitle>
                <Card.Text className={classGhost}>{legendText}</Card.Text> */}
            </div>
        </Card>
    </section>
  )
}

export default CardGhost