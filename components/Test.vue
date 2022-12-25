<script lang="ts" setup>
const obj = ref({
    hi: 'hi',
    hello: 'hello'
})
</script>
<template>
    <h1>{{ obj.hello }}</h1>
</template>