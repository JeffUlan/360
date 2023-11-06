<template>
    <div>
      <heads/>
      <wwu/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import wwu from "~/components/collaberate/wwu.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,wwu,foots},
   }
   
  </script>
  <style>
  
  </style>
   