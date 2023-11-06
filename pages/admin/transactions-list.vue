<template>
    <div>
      <heads/>
      
      <tlist/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/admin/header.vue";
    import tlist from "~/components/admin/transactions-list.vue";
    
   export default {
     components: {heads,tlist},
   }
</script>
  <style>
  
  </style>
   