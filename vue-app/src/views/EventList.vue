<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard />
    <router-link :to="{ name: 'event-show', params: { id: '123' } }"
      >Show event</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  name: 'EventList',
  components: {
    EventCard
  }
}
</script>
