<template>
    <div>
      <heads/>
      
      <reviews/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/admin/header.vue";
    import reviews from "~/components/admin/reviews.vue";
    
   export default {
     components: {heads,reviews},
   }
</script>
  <style>
  
  </style>
   