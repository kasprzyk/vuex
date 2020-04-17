<template>
  <div>
    <h1>Create an event, {{ userName }}</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    userName: state => state.user.name,
    userId: state => state.user.id,
    categories: state => state.categories
  })
}
</script>

<style scoped></style>
