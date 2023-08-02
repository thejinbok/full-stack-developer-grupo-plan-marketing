<template>
    <div class="flex mb-4 place-content-end">
        <div class="px-4 py-2 text-white bg-indigo-600 cursor-pointer hover:bg-indigo-700">
            <router-link :to="{ name: 'household-appliances.create' }" class="text-sm font-medium">Create Household Appliance</router-link>
        </div>
    </div>

    <div class="overflow-hidden overflow-x-auto align-middle sm:rounded-md">
        <table class="w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500">Name</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500">Description</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500">Voltage</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span class="text-xs font-medium leading-4 tracking-wider text-left text-gray-500">Brand</span>
                </th>
                <th class="px-6 py-3 bg-gray-50"></th>
            </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="item in householdAppliances" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.description }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.voltage }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.brand }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-center text-gray-900 whitespace-no-wrap">
                        <router-link :to="{ name: 'household-appliances.edit', params: { id: item.id } }" class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 mr-2">Edit</router-link>
                        <button @click="deleteHouseholdAppliance(item.id)" class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25">
            Delete</button>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import useHouseholdAppliances from '@/composables/household-appliances';
import { onMounted } from 'vue';

const { householdAppliances, indexHouseholdAppliances, destroyHouseholdAppliance } = useHouseholdAppliances();

const deleteHouseholdAppliance = async (id) => {
    if (!window.confirm('Are you sure?')) {
        return;
    }

    await destroyHouseholdAppliance(id);

    await indexHouseholdAppliances();
};

onMounted(indexHouseholdAppliances);
</script>
