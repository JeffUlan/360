<template>
    <div>
      <heads/>
      <help/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import help from "~/components/help.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,help,foots},
   }
   
  </script>
  <style>
  
  </style>
   