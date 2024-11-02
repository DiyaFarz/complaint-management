const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const complaintRoutes = require('./routes/complaints');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
connectDB();
app.use(
    cors({ origin: "http://localhost:5173" })
  );
app.use(bodyParser.json());

//app.use('/api/auth', authRoutes);
app.use('/api', complaintRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
