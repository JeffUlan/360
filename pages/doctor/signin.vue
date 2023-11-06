<template>
    <div>
      <heads/>
      <signin/>
      <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/header.vue";
    import signin from "~/components/doctor/signin.vue";
    import foots from "~/components/footer.vue";
  
  
  
    export default {
      components: {heads,signin,foots},
    }
  </script>
  
  <style>
  </style>
  
  <script setup>
  const type = ref("password");
  
  const togglePassword = () => {
    type.value === "password" ? "text" : "password";
  };
  </script>