<template>
    <form class="space-y-6" @submit.prevent="saveHouseholdAppliance">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.name">
                    <div v-if="errors.name">
                        <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
                    </div>
                </div>
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <div class="mt-1">
                    <input type="text" name="description" id="description" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.description">
                    <div v-if="errors.description">
                        <span class="text-sm text-red-400">{{ errors.description[0] }}</span>
                    </div>
                </div>
            </div>

            <div>
                <label for="voltage" class="block text-sm font-medium text-gray-700">Voltage</label>
                <div class="mt-1">
                    <select name="voltage" id="voltage" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.voltage">
                        <option value="110">110</option>
                        <option value="220">220</option>
                    </select>
                    <div v-if="errors.voltage">
                        <span class="text-sm text-red-400">{{ errors.voltage[0] }}</span>
                    </div>
                </div>
            </div>

            <div>
                <label for="brand" class="block text-sm font-medium text-gray-700">Brand</label>
                <div class="mt-1">
                    <select name="brand" id="brand" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" v-model="form.brand">
                        <option value="Brastemp">Brastemp</option>
                        <option value="Electrolux">Electrolux</option>
                        <option value="Fischer">Fischer</option>
                        <option value="LG">LG</option>
                        <option value="Samsung">Samsung</option>
                    </select>
                    <div v-if="errors.brand">
                        <span class="text-sm text-red-400">{{ errors.brand[0] }}</span>
                    </div>
                </div>
            </div>
        </div>

        <button type="submit" class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md ring-gray-300 hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create
        </button>
    </form>
</template>

<script setup>
import useHouseholdAppliances from '@/composables/household-appliances';
import { reactive } from 'vue';

const form = reactive({
    name: '',
    description: '',
    voltage: '',
    brand: ''
});

const { errors, storeHouseholdAppliance } = useHouseholdAppliances();

const saveHouseholdAppliance = async () => {
    await storeHouseholdAppliance({ ...form });
};
</script>
