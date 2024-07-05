<template>
  <div class="flex h-screen overflow-hidden">

    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <div class="sm:flex sm:justify-between sm:items-center mb-8">

            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
            </div>

            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

            
            </div>

          </div>

          <!-- Cards -->
          <div class="grid grid-cols-12 gap-6">

          </div>

        </div>
      </main>


    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../layouts/Sidebar.vue'
import Header from '../layouts/Header.vue'


export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Header,

  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>