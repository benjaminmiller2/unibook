import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

//methods
const saveUser = () => {
  let userEmail = document.getElementById('js-email').value;
  let userName = document.getElementById('js-username').value;
  let userPassword = document.getElementById('js-password').value;
  let userPasswordConfirm = document.getElementById('js-confirm').value;

  if (userEmail && userName && userPassword && userPasswordConfirm){
    API.saveUser({
      email: userEmail,
      username: userName,
      password: userPassword,
      passwordConf: userPasswordConfirm
    });
    console.log(userEmail, userName, userPassword, userPasswordConfirm);
  }else{
    console.log('React is quite stupid.')
  }

}

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
          <div class="w3"/>
			<div class="signin-form profile"/>
				<h3>Login</h3>
				
				<div class="login-form" />
					<form action="/" method="post"/>
						<input type="text" name="logemail" placeholder="E-mail" required=""/>
						<input type="password" name="logpassword" placeholder="Password" required=""/>
						<div class="tp"/>
							<input type="submit" value="LOGIN NOW"/>
					

		<div class="agile" />
			<div class="signin-form profile"/>
				<h3>Register</h3>
				
				<div class="login-form"/>
					<form action="/" method="post"/>
						<input type="text" name="email" placeholder="E-mail" id="js-email" required=""/>
						<input type="text" name="username" placeholder="Username" id="js-username" required=""/>
						<input type="password" name="password" placeholder="Password" id="js-password" required=""/>
						<input type="password" name="passwordConf" placeholder="Confirm Password" id="js-confirm" required=""/>
						<input type="submit" value="REGISTER" onClick={() => saveUser()}/>

        </Col>
      </Row>


      </Hero>
    </Container>
  </div>
);

export default About;
