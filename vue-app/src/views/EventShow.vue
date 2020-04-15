<template>
  <h1>Showing event {{ $route.params.id }}</h1>
</template>

<script>
export default {
    props: ["id"]
}