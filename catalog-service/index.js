const express = require('express');
const cors = require('cors');
const apiRoutes = require('./src/routes/api');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Catalog Service (Express) running on port ${PORT}`);
});