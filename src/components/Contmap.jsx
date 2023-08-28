import React, { useState } from 'react'
import axios from 'axios'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contmap ({ isLoggedIn, sendDetail}) {
	const [name , setname]= useState('')
	const [email , setemail]= useState('')
	const [message, setmessage]= useState('')
	const [subject, setsubject] = useState( '' )
	// const [isLoggedIn, setisLoggedIn] = useState(false);

	const form = useRef();

// 	var templateParams = {
//     name: 'Legal connect',
//     notes: 'Check this out!'
// };
	
	function senddetail (e) {
		e.preventDefault('')
	


		emailjs.sendForm('service_03jlpgm', 'template_naaj1lf', form.current, 'z4B0UmEnM0TXV5INq'  )
    .then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
		console.log('message sent')
		console.log(name, email, subject, message)
    }, function(error) {
       console.log('FAILED...', error);
    });
		
		// axios.post('http://localhost:2000/contact')

		
	}
  return (
		<div className="tainer">
			<div class="container-fluid py-5">
				<div class="container py-5">
					<div class="text-center pb-2">
						<h6 class="text-uppercase">Contact Us</h6>
						<div class="section-header">
							<h2>Contact Us</h2>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-6 mb-5 mb-lg-0">
							<div class="contact-form">
								<div id="success"></div>
								<form name="sentMessage" ref={form} novalidate="novalidate" onSubmit={senddetail}>
									<div class="form-row co">
										<div class=" control-group col-sm-6">
											<input
												type="text"
												class="form-control p-4"
												id="name"
											  value={name}
											  name='fname'
												onChange={(e) => setname(e.target.value)}
												placeholder="Your Name"
												required="required"
												data-validation-required-message="Please enter your name"
											/>
											<p class="help-block text-danger"></p>
										</div>
										<div class=" control-group col-sm-6">
											<input
												type="email"
												class="form-control p-4"
											  id="email"
											  name='email'
												value={email}
												onChange={(e) => setemail(e.target.value)}
												placeholder="Your Email"
												required="required"
												data-validation-required-message="Please enter your email"
											/>
											<p class="help-block text-danger"></p>
										</div>
									</div>
									<div class="control-group">
										<input
											type="text"
											class="form-control p-4"
										  id="subject"
										  name='subject'
											value={subject}
											onChange={(e) => setsubject(e.target.value)}
											placeholder="Subject"
											required="required"
											data-validation-required-message="Please enter a subject"
										/>
										<p class="help-block text-danger"></p>
									</div>
									<div class="control-group">
										<textarea
											class="form-control p-4"
											rows="6"
										  id="message"
										  name='message'
											value={message}
											onChange={(e) => setmessage(e.target.value)}
											placeholder="Message"
											required="required"
											data-validation-required-message="Please enter your message"
										></textarea>
										<p class="help-block text-danger"></p>
									</div>
									<div>
										<button
										  class="btn btn-primary btn-block " 
										//   title={`Please sing in to send message`}
										     
											type="submit"
											id="sendMessageButton"
											
										>
											Send Message
										</button>
									</div>
								</form>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}
