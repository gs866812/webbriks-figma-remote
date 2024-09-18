"use client";
import { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    driveLink: '',
    file: null, // To store the uploaded file
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('email', formData.email);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('website', formData.website);
    formDataObj.append('message', formData.message);
    formDataObj.append('driveLink', formData.driveLink);

    if (formData.file) {
      formDataObj.append('file', formData.file);
    }

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        body: formDataObj,  // Use FormData to handle form fields and file
      });

      if (response.ok) {
        setSubmitStatus('Your request has been sent successfully!');
      } else {
        setSubmitStatus('Failed to send request.');
      }
    } catch (error) {
      setSubmitStatus('Error sending the request.');
    }
  };

  return (
    <div className="quote-form-container">
      <form onSubmit={handleSubmit} className="quote-form">
        <h2>Get a Quote</h2>

        <div className="input-field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-field">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-field">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-field">
          <label>Website (optional)</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-field">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-field">
          <label>Drive Link (optional)</label>
          <input
            type="text"
            name="driveLink"
            value={formData.driveLink}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-field">
          <label>Upload a File (optional)</label>
          <input
            type="file"
            name="file"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit Quote Request</button>
        {submitStatus && <p>{submitStatus}</p>}
      </form>

      <style jsx>{`
        .quote-form-container {
          padding: 20px;
        }
        .quote-form {
          max-width: 500px;
          margin: 0 auto;
        }
        .input-field {
          margin-bottom: 15px;
        }
        input, textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        button {
          width: 100%;
          padding: 10px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default QuoteForm;
