<template>
  <span class="badge" :class="status">{{badgeText}}</span>
</template>

<script>
export default {
  props: ['status', 'badgeText']
}
</script>

<style scoped>

</style>
