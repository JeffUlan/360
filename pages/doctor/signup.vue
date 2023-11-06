<template>
    <div>
      <heads/>
      <signup/>
      <foots/>
    </div>
   </template>
   
   <script>
   import heads from "~/components/header.vue";
   import signup from "~/components/doctor/signup.vue";
   import foots from "~/components/footer.vue";
   
export default {
    components: {heads,signup,foots},
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