const express = require('express');
const app = express();
const productsRoutes = require('./routes/products');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const ordersRoutes = require('./routes/sales');
const customerRoutes = require('./routes/customers');

require('dotenv').config();


// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'shopease API',
      version: '1.0.0',
      description: 'API for shopease  application',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3009}`,
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);
app.use('/customers', customerRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

