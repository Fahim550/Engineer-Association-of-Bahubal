<script setup>
import Founders from "@/components/Committees/Advisors.vue";
import ExecutiveMember from "@/components/Committees/ExecutiveMember.vue";
import CommonHero from "@/components/Shared/CommonHero.vue";
</script>
<template>
  <CommonHero
  titleBefore="Our"
  titleHighlight="Committees"
  subtitle="Meet the dedicated leaders and committee members who drive our mission forward."
/>
  <Founders />
  <ExecutiveMember />
</template>
