import React from "react";

const Welcome = () => {
  return (
    <main>
      <header>
        <h2 id="heading">Welcome to our College</h2>
        <div className="image">
          <img
            src="/logo.png"
            alt="Cantor College Logo"
            loading="lazy"
            width="150"
            height="150"
          />
        </div>
      </header>

      
      <section className="box" id="about-us" aria-labelledby="about-us-heading">
        <h2 id="about-us-heading">About Us</h2>
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
      </section>

      
      <section className="box" id="find-us" aria-labelledby="find-us-heading">
        <h2 id="find-us-heading">Find Us</h2>
        <address>
          Cantor College<br />
          Main Street<br />
          Sheffield<br />
          SC4 2BB
        </address>
      </section>

      
      <section className="box" id="contact-us" aria-labelledby="contact-us-heading">
        <h2 id="contact-us-heading">Contact Us</h2>
        <p>
          Tel: <a href="tel:+4413212340235">(01321) 2340 235</a><br />
          Fax: <a href="fax:+4413212340236">(01321) 2340 236</a><br />
          Email: <a href="mailto:info@cantorcollege.ac.uk">info@cantorcollege.ac.uk</a>
        </p>
      </section>

      
      <section
        className="box"
        id="working-with-business"
        aria-labelledby="working-with-business-heading"
      >
        <h2 id="working-with-business-heading">Working with Business</h2>
        <p>
          Partner with Cantor College: Unlock Expertise, Innovation, and Growth. At Cantor College, we believe in the power of collaboration between education and industry. 
          Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. 
          With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.
        </p>
        <p>
          <a href="/business" aria-label="Learn more about business collaborations at Cantor College">
            More information on our business page!</a>
        </p>
      </section>
    </main>
  );
};

export default Welcome;
