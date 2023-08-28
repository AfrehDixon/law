import React from 'react';
import pro1 from '../img/pro1.jpg'
import pro2 from '../img/pro2.jpg'
import pro3 from '../img/pro3.jpg'

const Testimonials = () => {
  const testimonialsData = [
    {
      author: 'John Doe',
      position: 'Legal Professional',
      testimonial: 'Legal Connect is an invaluable resource for legal professionals and individuals seeking accurate legal information. The quality of the articles and the interactive forums make it a go-to platform for staying updated on legal matters.',
      profileImage : pro1
    },
    {
      author: 'Jane Smith',
      position: 'User and Legal Enthusiast',
        testimonial: 'I\'ve been using Legal Connect for a while now, and it has helped me grasp complex legal concepts in a user-friendly way. The user forums provide a space for productive discussions, and I love the personalized profile features.',
      profileImage: pro2
    },
    {
      author: 'David Johnson',
      position: 'Law Student',
        testimonial: 'As a law student, Legal Connect has been an incredible supplement to my studies. The articles are well-researched, and the platform\'s interface is intuitive. It\'s like having a legal library and study group in one place.'
        ,profileImage: pro3
    }
    // You can add more testimonials here
  ];

  const testimonialStyles = {
    testimonials: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f7f7f7'
    },
    testimonialList: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    testimonial: {
        border: '1px solid #ccc',
        backgroundColor: '#22808e',
        borderRadius: '8px',
        color: '#fff',
      padding: '15px',
      margin: '15px',
      maxWidth: '400px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
    },
    author: {
      fontWeight: 'bold',
      marginTop: '10px'
    },
    position: {
      color: '##22808e',
      fontSize: '14px'
      },
      profileImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
          marginBottom: '10px',
          objectfit: 'cover',
          objectPosition: 'center'
            
      },
      img :{
          width: '100%',
            height: '100%',
          
      }
  };

  return (
    <div style={testimonialStyles.testimonials}>
      <h2>What Others Say About Us</h2>
      <div style={testimonialStyles.testimonialList}>
        {testimonialsData.map((testimonial, index) => (
            <div key={index} style={testimonialStyles.testimonial}>
            <img src={testimonial.profileImage} alt={`Profile of ${testimonial.author}`} style={testimonialStyles.profileImage} />
            <p style={testimonialStyles.testimonialText}>{testimonial.testimonial}</p>
            <p style={testimonialStyles.author}>{testimonial.author}</p>
            <p style={testimonialStyles.position}>{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;