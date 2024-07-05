<template>
    <div class="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 class="font-semibold text-gray-800 dark:text-gray-100">Todos</h2>
      </header>
      <div class="p-4">
        <div class="overflow-x-auto">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
              <tr>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">title</div>
                </th>
                <th class="p-2 whitespace-nowrap">
                  <div class="font-semibold text-left">completed</div>
                </th>
              </tr>
            </thead>
           
            <tbody class="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              <tr
                v-for="todo in todos" :key="todo.id"
              >
                <td class="p-2 whitespace-nowrap">
                  <div class="text-left">{{todo.title}}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div :class="{'bg-red-200': !todo.completed, 'bg-green-200': todo.completed}" class="p-1 rounded-lg">
                        <div class="text-center">{{ todo.completed ? 'Vrai' : 'Faux' }}</div>
                    </div>
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
    name: 'TodosCards',
    data() {
        return {
            todos: []
        }
    },
    created() {
        this.fetchTodos();
    }, 
    methods: {
        async fetchTodos() {
            try {
                const response = await apiClient.getTodos();
            if (response && response.data) {
                this.todos = response.data.slice(0, 10);
                console.log(response.data.slice(0, 2))
            } else {
                console.error(response);
            }
            } catch (error) {
                console.error(error);
            }
        }
   },
}
</script>