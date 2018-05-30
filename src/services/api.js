import { create } from 'apisauce';

const api = create({
    baseUrl: 'http://tusk.poggers.com.br/tplink-1.0.3/api',
});

api.addResponseTransform(response => {
    if(!response.ok) throw response;
})

export default api;