// src/App.jsx
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';

const App = () => {


  return (
    <div>
      <h1>Anonymous Complaint Management System</h1>
      
      <ComplaintForm />
      <ComplaintList />
    </div>
  );
};

export default App;
