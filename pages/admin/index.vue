<template>
    <div>
      <heads/>
      
      <mainboard/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/admin/header.vue";
    import mainboard from "~/components/admin/mainboard.vue";
    
   export default {
     components: {heads,mainboard},
   }
</script>
  <style>
  
  </style>
   