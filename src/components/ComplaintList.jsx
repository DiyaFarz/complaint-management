// src/components/ComplaintList.jsx
import  { useEffect, useState } from 'react';
import api from '../api';

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await api.get('/complaints');
        setComplaints(res.data);
      } catch (error) {
        console.log(error)
        alert('Error fetching complaints');
      }
    };
    fetchComplaints();
  }, []);

  return (
    <div>
      <h2>All Complaints</h2>
      {complaints.map((complaint) => (
        <div key={complaint._id}>
          <h3>{complaint.title}</h3>
          <p>{complaint.description}</p>
          <p>Status: {complaint.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ComplaintList;
