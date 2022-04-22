import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "DA API",
        version: "1.0.0",
        description: "Elice 데이터분석 팀프로젝트: 팀18 우아한 남매들",
      },
      servers: [
        {
          url: "http://localhost:" + process.env.SERVER_PORT,
        },
      ],
    },
    apis: ['./routes/*.js', './swagger/*'],
  };

const specs = swaggerJsDoc(options);


export { swaggerUi, specs };
