import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API Documentation',
      version: '1.0.0',
      description: 'API documentation for my Express.js project',
    },
    servers: [
      {
        url: 'http://localhost:5500/api/v1', 
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Points to the route files where Swagger annotations will be used
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
