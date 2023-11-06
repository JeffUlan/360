<template>
    <div>
      <heads/>
      <syh/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import syh from "~/components/collaberate/syh.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,syh,foots},
   }
   
  </script>
  <style>
  
  </style>
   