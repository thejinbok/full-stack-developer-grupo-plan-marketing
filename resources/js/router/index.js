import { createRouter, createWebHistory } from 'vue-router';

import HouseholdAppliancesIndex from '@/components/household-appliances/HouseholdAppliancesIndex.vue';
import HouseholdAppliancesCreate from '@/components/household-appliances/HouseholdAppliancesCreate.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'household-appliances.index',
        component: HouseholdAppliancesIndex
    },
    {
        path: '/household-appliances/create',
        name: 'household-appliances.create',
        component: HouseholdAppliancesCreate
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
