import React from 'react'
import { industryData, audienceData } from './data/IndustryData.js'
import Footer from './Footer.js'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Advertise.scss'



export default function Advertise() {


    return (
        <>
        <div className="advertise-container">
            <div className="adv-header">
                <h2>Build Your Business With Us</h2>
                <p>Reach milions of buyers, sellers and renters across the country with us</p>
                <div className="adv-underline"></div>
            </div>
            <div className="industry-section">
                <h3>Select your industry and get started</h3>
                <div className="industries">
                    {
                        industryData.map((item) => {
                            return <Card style={{ width: '20rem' }} key={item.id}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Button variant="primary">Get started</Button>
                            </Card.Body>
                        </Card>
                        })
                    }
                </div>
            </div>
            <div className="audience-section">
                <h3>Our audience</h3>
                <div className="audiences">
                    <div className="audiences-wrapper">
                        {
                            audienceData.map((item) => {
                                return <Card style={{ width: '20rem', backgroundColor: '#001751', border: 'none' }} key={item.id}>
                                {item.image}
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                            </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
       <Footer />
        </>
    )
}