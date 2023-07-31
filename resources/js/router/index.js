import { createRouter, createWebHistory } from 'vue-router';

import HouseholdAppliancesIndex from '@/components/household-appliances/HouseholdAppliancesIndex.vue';
import HouseholdAppliancesCreate from '@/components/household-appliances/HouseholdAppliancesCreate.vue';
import HouseholdAppliancesEdit from '@/components/household-appliances/HouseholdAppliancesEdit.vue';

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
    },
    {
        path: '/household-appliances/:id/edit',
        name: 'household-appliances.edit',
        component: HouseholdAppliancesEdit,
        props: true
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
