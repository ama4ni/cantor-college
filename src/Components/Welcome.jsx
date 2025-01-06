import React from "react";

const Welcome = () =>{
  return (
    <div>
      <h2 id="heading">Welcome to our college</h2>
      
     <div className="img"> <img src="/logo.png" alt="logo"/></div>


      <div className="box" id="about-us">
        <h2>About Us</h2>
        <p>
          Cantor College was established in 1989 to specialize in Computing and Design.<br />
          At Cantor College, we want to give students the education they need to achieve their career aims, 
          leaving them equipped with the knowledge, skills, and experience to succeed.<br />
          Cantor College gives you the opportunities that can give you the edge when you enter the world of work, 
          through our teaching and our links to some of the world's leading researchers and employers.<br />
          Our students have gone on to successful careers in a wide range of industries across the globe.<br />
          Whatever your ambitions, our learning and support can help you get the most out of your time
          with Cantor College, both as a student and in your future career.
        </p>
      </div>

      <div className="box" id="find-us">
        <h2>Find Us</h2>
        <p>
          How to find us:<br />
          Cantor College<br />
          Main Street<br />
          Sheffield<br />
          SC4 2BB
        </p>
      </div>

      <div className="box" id="contact-us">
        <h2>Contact Us</h2>
        <p>
          Tel: (01321) 2340 235<br />
          Fax: (01321) 2340 236<br />
          Email: info@cantorcollege.ac.uk
        </p>
      </div>

      <div className="box" id="working-with-business">
        <h2>Working with Business</h2>
        <p>Partner with Cantor College: Unlock Expertise, Innovation, and Growth
          At Cantor College, we believe in the power of collaboration between education and industry.   
          Our College offers a range of specialized services designed to support businesses in achieving 
          their goals through cutting-edge expertise, innovation, and tailored solutions. 
          With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.
           More infromation on our buisness page!
          </p>
      </div>
    </div>
  );
};

export default Welcome;
