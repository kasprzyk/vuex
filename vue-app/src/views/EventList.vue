<template>
  <div>
    <h1>Event Listing</h1>
    <router-link :to="{ name: 'event-show', params: { id: '123' } }"
      >Show event</router-link
    >
  </div>
</template>
