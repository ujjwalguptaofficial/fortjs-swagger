import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

SwaggerUI({
    dom_id: '#app',
    url: './swagger.json'
})