import { createRouter, createWebHistory } from 'vue-router';

import HouseholdAppliancesIndex from '@/components/household-appliances/HouseholdAppliancesIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'household-appliances.index',
        component: HouseholdAppliancesIndex
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
