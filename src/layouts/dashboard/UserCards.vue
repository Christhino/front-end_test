<template>
    <div class="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 class="font-semibold text-gray-800 dark:text-gray-100">User</h2>
      </header>
      <div class="p-4">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Name</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Username</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">Phone</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Website</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Address</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-center">Company</div>
                </th>
              </tr>
            </thead>
           
            <tbody class="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              <tr
                v-for="user in users" :key="user.id"
              >
                <td class="p-2 whitespace-nowrap">
                  <div class="font-medium text-gray-800 dark:text-gray-100">{{user.name}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{user.username}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{user.phone}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{user.website}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{user.address.street}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{user.company.name}}</div>
                </td>
              </tr>
            </tbody>
          </table>
  
        </div>
  
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import apiClient from '../../api';

export default {
    name: 'UserCards',
    data() {
        return {
            users: []
        }
    },
    created() {
        this.fetchUsers();
    }, 
    methods: {
        async fetchUsers() {
            try {
                const response = await apiClient.getAllUser();
            if (response && response.data) {
                this.users = response.data;
            } else {
                console.error('Format de réponse inattendu:', response);
            }
            } catch (error) {
                console.error('Erreur lors de la recup des users:', error);
            }
        }
   },
}
</script>