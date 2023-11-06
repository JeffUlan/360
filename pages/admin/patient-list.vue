<template>
    <div>
      <heads/>
      
      <plist/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/admin/header.vue";
    import plist from "~/components/admin/patient-list.vue";
    
   export default {
     components: {heads,plist},
   }
</script>
  <style>
  
  </style>
   