import { create } from 'apisauce';

const api = create({
    baseUrl: 'http://localhost:8080-1.0.3/api',
});

api.addResponseTransform(response => {
    if(!response.ok) throw response;
})

export default api;