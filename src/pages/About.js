import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Container style={{ margin: 0 }}>
    <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg" >
      <h1>UniBookExchange</h1>
      <h2>Get the best bang for your book!</h2>
    
      <Row>
        <Col size="md-12">
          <h1>Welcome to UniBookExchange!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p className = "text">
            College tuition is expensive as is don't be frustrated with the hassle of buying textbooks only to sell them back for a fraction of the price you paid.  
            Let UniBookExchange help you post your textbook on a platform that is specific to your school where chances of finding a buyer are 
            higher.  You negotiate the details of the exchange one-on-one with whomever is interested, no more third party, no more extra fees, and yes, more money back in your pocket!
          </p>
          <p className = "text">
            Post-final days never looked this easy, happy selling!
           
          </p>
        
        
        </Col>
      </Row>
      </Hero>
    </Container>
  </div>
);

export default About;
