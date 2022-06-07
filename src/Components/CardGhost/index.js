import React from 'react'
import { Card } from 'react-bootstrap'
import './index.scss'

function CardGhost( { image, title, h1Text, legendText, classGhost } ) {
  
  return (
    <section className={`cards-container ${classGhost}`}>
        <div className="card-wrapper">
            <Card className="bg-dark text-white">
                <Card.Img src={image} alt="Card image" />
                <div className="card-ImgOverlay">
                    <Card.Title >{title}</Card.Title>
                    <Card.Subtitle>
                        {h1Text}
                    </Card.Subtitle>
                    <Card.Text>{legendText}</Card.Text>
                </div>
            </Card>
        </div>
        {/* EL CODIGO DE ABAJO SE UTILIZA CON CAROUSEL NORMAL*/}
        {/* <div className="card-wrapper">
            <Card className="bg-dark text-white">
                <Card.Img src={image} alt="Card image" />
                <div className={`card-ImgOverlay ${classGhost}`}>
                    <Card.Title >{title}</Card.Title>
                    <Card.Subtitle>
                        {h1Text}
                    </Card.Subtitle>
                    <Card.Text>{legendText}</Card.Text>
                </div>
            </Card>
        </div> */}
        {/* EL CODIGO DE ABAJO SE UTILIZA CON CAROUSEL GRID*/}
        {/* 
        <section className="card-container">
            <Card className="bg-dark text-white">
                <Card.Img src={image} alt="Card image" />
                <div className={`card-ImgOverlay ${classGhost}`}>
                    <Card.Title >{title}</Card.Title>
                    <Card.Subtitle>
                        {h1Text}
                    </Card.Subtitle>
                    <Card.Text>{legendText}</Card.Text>
                </div>
            </Card> 
        </section>   */}
    </section>
  )
}

export default CardGhost