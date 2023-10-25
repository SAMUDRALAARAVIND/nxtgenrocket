import React from 'react'
import SnackBar from '../../snackbar/SnackBar';

const EmailUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target ;
        const contactInfo = `
            Hello There!
            I am ${form["name"].value} intrestend in connecting with your team for the project to be done.Reach back to me at 
            Email: ${form["email"].value}
            Phone: ${form["phone"].value}
        `;
        
        const emailLink = `mailto:samudralaaravind1708@gmail.com?subject=Need our project to be done&body=${contactInfo}`;
        const emailWindow = window.open(emailLink, '_blank');

        if (emailWindow) {
            emailWindow.focus();
        } else {
            alert('Please allow pop-ups to send the email.');
        }
    };

    return (
        <section className='contacts'>
            <form onSubmit={handleSubmit} className="text-form" >
                <input type="text" name='name' required min={3} placeholder='Enter your name' />
                <input type="email" required name="email" placeholder='Enter your Email' />
                <input type="number" name='phone' placeholder='Contact Number' required />
                <textarea rows={5} name='message' placeholder='Message...' >
                </textarea>
                <button>Send Email</button>
            </form>
        </section>
    )
}

export default EmailUs