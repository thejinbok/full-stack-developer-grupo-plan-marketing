import Alpine from 'alpinejs';
import { createApp } from 'vue';

import './bootstrap';
import router from './router';
import HouseholdAppliancesIndex from '@/components/household-appliances/HouseholdAppliancesIndex.vue';

window.Alpine = Alpine;

Alpine.start();

createApp({
    components: {
        HouseholdAppliancesIndex
    }
}).use(router).mount('#app');
