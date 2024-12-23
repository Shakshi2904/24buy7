import React, {useState} from 'react';
import './Contact.css';
function Contact() {
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
    Phone: '',
    Subject: '',
    Message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = async (event) => {
    event.preventDefault();

    const data = {
      name: formData.Fname + ' ' + formData.Lname,
      email: formData.Email,
      phone: formData.Phone,
      subject: formData.Subject,
      message: formData.Message
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.text();
      console.log(result);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  return (
    <div className="contact" id='contactpage'>
      <div  className='ourServicePage'><h1>CONTACT US!</h1></div>
      <form className='form'>
        <div className='firstfield'>
            <input className='Fname' type='text' placeholder='First Name' value={formData.Fname} name='Fname' id='name' onChange={handleChange} required/>
            <input className='Lname' type='text' placeholder='Last Name' value={formData.Lname} name='Lname' onChange={handleChange} required/>
        </div>
        <div className='restfield'>
        <input type='email' placeholder='Email' name='Email' id='email' value={formData.Email} onChange={handleChange} required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='Phone Number' name='Phone' id='phone' value={formData.Phone} onChange={handleChange} required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='Subject' name='Subject' id='subject' value={formData.Subject} onChange={handleChange} required/>
        </div>
        <div className='textfield'>
        <textarea type='text' rows="6" placeholder='Message' name='Message' id='message' value={formData.Message} onChange={handleChange} required/>
        </div>
        <div className='brandbybutton'>
        <button onClick={sendEmail}  className='button'>Send Message→</button>
       </div>
      </form>
    </div>
  );
}
export default Contact;
