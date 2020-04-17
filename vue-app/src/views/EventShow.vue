<template>
  <h1>Showing event {{ $route.params.id }}</h1>
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
    props: ["id"],
    data(){
      return {
        event: {}
      }
    },
    created() {
      EventService.getEvent(this.id).then((response)=>{
        this.event = response.data
      }).catch(error=>{
        console.log(error)
      })
    }
}