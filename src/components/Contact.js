import React from 'react'

const Contact = ({ value, handleSubmit, handleChange }) => {
  return (

        <section className='contact'>
            <h2 id='contact'>Contact</h2>
            <p>Feel free to reach out about opportunities or just to say hi!</p>
            
            <form id='contact-form' onSubmit={() => handleSubmit}>
                <div className='contact-fields'>
                    <label htmlFor='name'></label>
                    <input type='text' value={value} id='name' required placeholder='Your Name' onInput={() => handleChange}/>
                </div>
                <div className='contact-fields'>
                    <label htmlFor='email'></label>
                    <input type='email' id='email' value={value} required placeholder='Your Email' onInput={() => handleChange} />
                </div>
                <div className='contact-fields'>
                    <label htmlFor='message'></label>
                    <textarea placeholder='Your Message'
                     value={value} id='message'
                      onInput={() => handleChange}
                       rows="5"
                    cols="30"/>
                </div>
                <div className='button'>
                <button type='submit' className='submit'>Send</button>
                </div>
            </form>
        </section>
    
  );
};

export default Contact;