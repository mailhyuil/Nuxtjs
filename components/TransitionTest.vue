<script lang="ts" setup>
import { ref, Transition } from 'vue'

const show = ref(false)
</script>
<template>
    <button class="p-2 bg-slate-100 rounded border-slate-300 border-2" @click="show = !show">Toggle</button>
    <Transition name="slide-fade">
        <p class="font-bold text-5xl" v-if="show">hello</p>
    </Transition>
</template>
<style scoped>
/*
  Transition의 name을 slide나 원하는 이름으로 지정하면 이름을 바인딩 할 수 있다.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>