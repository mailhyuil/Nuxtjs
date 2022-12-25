<script lang="ts" setup>
import { ref } from 'vue'

const isOpened = ref(false)
</script>
<template>
    <button @click="isOpened = true">Open Modal</button>
    <Teleport to="body">
        <div v-if="isOpened" class="modal fixed z-999 top-[20%] left-[50%] w-[300px] ml-[-150px] bg-white p-20">
            <p>Hello from the modal!</p>
            <button @click="isOpened = false">Close</button>
        </div>
    </Teleport>
</template>
<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>