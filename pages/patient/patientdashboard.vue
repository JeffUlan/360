<template>
  <div>
    <heads/>
    <patient/>
    <foots/>
  </div>
</template>
  
<script>

import heads from "~/components/patient/patientheader.vue";
import patient from "~/components/patient/patientdashboard.vue";
import foots from "~/components/footer.vue";

export default {
    components: {heads,patient,foots},
}

</script>
