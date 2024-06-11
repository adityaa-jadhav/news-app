import React, { Component } from 'react';
import './About.css';
import logo from '../logo.png'

class About extends Component {
  render() {
    return (
      <div className="container my-5  about-page">
        <div className="jumbotron bg-crimson text-dark">
          <h1 className="display-4"><strong>About NewsRocket</strong></h1>
          <p className="lead">Your number one source for the latest news.</p>
          <hr className="my-4" />
          <p>Welcome to NewsRocket, your go-to platform for real-time news updates. We’re committed to delivering the most reliable, accurate, and up-to-date news, with a focus on dependability, customer service, and uniqueness.</p>
        </div>

        

        <div className="mt-5 jumbotron bg-crimson text-dark">
          <h2>Our Mission</h2>
          <p>Our mission is to provide real-time news updates with accuracy and reliability. We aim to keep our readers informed about the latest happenings around the world in various categories including entertainment, health, science, sports, technology, and business.</p>
        </div>

        <div className="mt-5 jumbotron bg-crimson text-dark">
          <div >
            <h2>About Developer</h2>
            <p>NewsRocket is developed by Aditya Jadhav, a passionate web developer dedicated to creating innovative solutions that make a difference. With a background in web development, I strive to deliver high-quality applications that meet the needs of users.</p>
          </div>
          
        </div>

        <div className="mt-5 jumbotron bg-crimson text-dark">
          <h2>Contact Us</h2>
          <p>For any inquiries or feedback regarding NewsRocket, feel free to reach out to me at <a href="mailto:jadhavadi586@gmail.com">jadhavadi586@gmail.com</a>. I'm always open to hearing your thoughts and suggestions!</p>
        </div>
      </div>
    );
  }
}

export default About;
