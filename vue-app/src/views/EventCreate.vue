<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>Event was created by {{ user.id }}</p>
    <p>{{ getEvent(1) }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped></style>
