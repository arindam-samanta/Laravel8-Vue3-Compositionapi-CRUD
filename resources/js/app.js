require('./bootstrap');

require('alpinejs');

import {createApp} from 'vue'
import router from './router'
import CompanyIndex from "./components/companies/company_index";

createApp({
    components:{
        CompanyIndex
    }
}).use(router).mount("#app")
