import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'https://curso-vue-63618.firebaseio.com/';
// axios.defaults.headers.common['Authorization'] = 'abc123';
// axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-63618.firebaseio.com/',
            headers: {
                get: {
                    "Authorization": 'abc213'
                }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // if (config.method == 'post') {
            //     config.method = 'put';
            // }
            // console.log(config.method);
            // console.log(config.method);
            return config;
        }, error => Promise.reject(error))

        // Vue.prototype.$http.interceptors.response.use(res => {
        //     // const array = [];
        //     // for(let key in res.data) {
        //     //     array.push({ id: key, ...res.data[key] });
        //     // }
        //     // res.data = array;
        //     console.log('res', res.data)
        //     return res.data;
        // }, error => Promise.reject(error))
    }
})