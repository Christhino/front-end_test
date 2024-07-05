<template>
    <div class="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 class="font-semibold text-gray-800 dark:text-gray-100">Comments</h2>
      </header>
      <div class="p-4">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">name</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">email</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">body</div>
                </th>
              </tr>
            </thead>
           
            <tbody class="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              <tr
                v-for="comment in comments" :key="comment.id"
              >
                <td class="p-2 whitespace-nowrap">
                  <div class="font-medium text-gray-800 dark:text-gray-100">{{ truncateText(comment.name, 15) }}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{comment.email}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{ truncateText(comment.body, 10) }}</div>
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
    name: 'CommentsCards',
    data() {
        return {
            comments: []
        }
    },
    created() {
        this.fetchComments();
    }, 
    methods: {
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + '...'; 
            } else {
                return text;
            }
        },
        async fetchComments() {
            try {
                const response = await apiClient.getComments();
            if (response && response.data) {
                this.comments = response.data.slice(0, 10);
                console.log(response.data.slice(0, 10))
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