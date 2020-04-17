<template>
  <div>
    <h1>Create an event, {{ userName }}</h1>
  </div>
</template>
<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    }
  }
}
</script>

<style scoped></style>
