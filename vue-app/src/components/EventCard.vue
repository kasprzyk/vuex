<template>
  <div>
    <h4>{{ title }}</h4>
  </div>
</template>
<script>
export default {
  name: 'EventCard',
  data() {
    return {
      title: 'Park cleanup'
    }
  }
}
</script>
<style scoped>
h4 {
  color: green;
}
</style>
