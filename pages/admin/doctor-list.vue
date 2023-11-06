<template>
    <div>
      <heads/>
      
      <dlist/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/admin/header.vue";
    import dlist from "~/components/admin/doctor-list.vue";
    
   export default {
     components: {heads,dlist},
   }
</script>
  <style>
  
  </style>
   