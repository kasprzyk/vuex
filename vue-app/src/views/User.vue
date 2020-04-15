<template>
  <h1>User {{ $route.params.username }}</h1>
</template>

<script>
export default {
    props: ["username"]
}