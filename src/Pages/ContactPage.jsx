import React from 'react'
import styled from 'styled-components'

const ContactPage = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className='common-heading'>Connect with Us</h2>

      <iframe title='contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043577!2d73.7929267740368!3d18.524603553400894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1672173136210!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xqkozjjj" method='post' className='contact-inputs'>
            <input type="text" placeholder='username' name='username' required autoComplete='off' />
            <input type="email" placeholder='Email' name='Email' required autoComplete='off' />  
            <textarea name="Message" cols="30" rows="10" placeholder='Enter Your Message' required  ></textarea>
            <input type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default ContactPage
