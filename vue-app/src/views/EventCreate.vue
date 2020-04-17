<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>Event was created by {{ user.id }}</p>
    <p>There are {{ categoriesLength }} categories</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    categoriesLength() {
      return this.$store.getters.categoriesLength
    },
    ...mapState(['user', 'categories']),
    getEvent() {
      return this.$store.getters.getEventById
    }
  }
}
</script>

<style scoped></style>
