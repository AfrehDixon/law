import React, { useState } from 'react';

const styles = {
  faqSection: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  question: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  questionText: {
    fontWeight: 'bold',
  },
  answer: {
    display: 'none',
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  openAnswer: {
    display: 'block',
  },
};

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div style={styles.faqSection}>
      {data.map((item, index) => (
        <div key={index} onClick={() => handleQuestionClick(index)} style={styles.question}>
          <span style={styles.questionText}>{item.question}</span>
          <span>{openIndex === index ? '-' : '+'}</span>
        </div>
      ))}
      {data.map((item, index) => (
        <div
          key={index}
          style={{ ...styles.answer, ...(openIndex === index && styles.openAnswer) }}
        >
          {item.answer}
        </div>
      ))}
    </div>
  );
};

export default FAQ;