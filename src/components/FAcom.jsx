import React from 'react';
import FA from './FA'; // Path to the FAQ component

const faqData = [
  {
    question: 'What is Legal Connect?',
    answer: 'Legal Connect is an online platform that provides a comprehensive range of legal resources, information, and support. It serves as a hub for legal articles, interactive forums, user profiles, and more, catering to both legal professionals and individuals seeking legal insights.',
  },
  {
    question: 'Is Legal Connect suitable for non-legal professionals?',
    answer: 'Yes, absolutely. Legal Connect is designed to be user-friendly and accessible for individuals without a legal background. It offers clear answers to common legal questions and provides a space for learning and discussion.',
    },
    {
        question: 'What are the future plans for Legal Connect?',
        answer: 'Legal Connect is dedicated to evolving and enhancing its offerings based on user needs. Future plans include expanding practice areas, integrating interactive tools, and remaining at the forefront of legal resources.',
    },
    {
        question: 'How can I contribute to Legal Connect?',
        answer: 'Legal Connect is a community-driven platform, and we welcome contributions from legal professionals and users alike. If you would like to contribute an article, please contact us at',
    },
    {
        question: 'How do I create a user profile on Legal Connect?',
        answer: 'To create a user profile, click on the “Sign Up” button on the top right corner of the page. You will be prompted to enter your name, email address, and password. Once you have created a profile, you will be able to access all of Legal Connect’s features.',
    },
    {
        question: 'How can I access legal articles on the platform?',
        answer: 'To access legal articles, click on the “Articles” tab on the top left corner of the page. You will be able to browse articles by practice area and topic. You can also search for articles using keywords.',
    }

  // Add more FAQ items here...
];

const FAcom = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <FA data={faqData} />
    </div>
  );
};

export default FAcom;
// Feel free to adjust the inline styles in the styles object according to your design preferences.





