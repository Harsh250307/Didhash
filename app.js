
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Replace 'your-mongodb-connection-string' with the actual connection string
mongoose.connect('mongodb+srv://harshcad07:Abc1234@harsh07.y5e0e.mongodb.net/?retryWrites=true&w=majority&appName=Harsh07', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
