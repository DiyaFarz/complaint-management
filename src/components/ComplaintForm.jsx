// src/components/ComplaintForm.jsx
import  { useState } from 'react';
import api from '../api';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/submit', formData);
    
      setFormData({ title: '', description: '' }); // Clear form fields
    } catch (error) {
      alert('Error submitting complaint');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit a Complaint</h2>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Submit Complaint</button>
    </form>
  );
};

export default ComplaintForm;
