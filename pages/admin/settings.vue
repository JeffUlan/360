<template>
    <div>
      <heads/>
      
      <settings/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/admin/header.vue";    
    import settings from "~/components/admin/settings.vue";
    
   export default {
     components: {heads,settings},
   }
</script>
  <style>
  
  </style>
   