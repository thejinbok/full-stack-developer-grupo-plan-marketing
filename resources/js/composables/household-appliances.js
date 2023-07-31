import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useHouseholdAppliances() {
    const householdAppliance = ref([]);
    const householdAppliances = ref([]);
    const errors = ref({});

    const router = useRouter();

    const indexHouseholdAppliances = async () => {
        let response = await axios.get('/api/v1/household-appliances');

        householdAppliances.value = response.data.data;
    };

    const storeHouseholdAppliance = async (data) => {
        try {
            await axios.post('/api/v1/household-appliances', data);

            await router.push({ name: 'household-appliances.index' });
        } catch (error) {
            if (422 === error.response.status) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const getHouseholdAppliance = async (id) => {
        let response = await axios.get(`/api/v1/household-appliances/${id}`);

        householdAppliance.value = response.data.data;
    };

    const updateHouseholdAppliance = async (id) => {
        try {
            await axios.patch(`/api/v1/household-appliances/${id}`, householdAppliance.value);

            await router.push({ name: 'household-appliances.index' });
        } catch (error) {
            if (422 === error.response.status) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyHouseholdAppliance = async (id) => {
        await axios.delete(`/api/v1/household-appliances/${id}`);
    };

    return {
        householdAppliance,
        householdAppliances,
        errors,
        indexHouseholdAppliances,
        storeHouseholdAppliance,
        getHouseholdAppliance,
        updateHouseholdAppliance,
        destroyHouseholdAppliance
    };
};
