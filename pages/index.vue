<script lang="ts" setup>
import { ref } from 'vue';
import Hi from '~~/components/Hi.vue';
import Header from '~~/components/Header.vue';
import Test from '~~/components/Test.vue';
import List from '~~/components/List.vue';
import Modal from '~~/components/Modal.vue';
import TransitionTest from '~~/components/TransitionTest.vue';

const text = ref('')
const valueToHi = ref('')

const updateText = (e: any) => {
    text.value = e.target.value
}
const sendToHi = (e: any) => {
    console.log('sending to Hi...')
    valueToHi.value = e.target.value
}
const color = ref('')
const changeColor = (e: any) => {
    color.value = e.target.value;
    isEntered.value = !isEntered.value
}
const isEntered = ref(false)
const model = ref('')
</script>

<template>
    <Header :color="color" :isEntered="isEntered" />
    <Hi v-bind:valueFromIndex="valueToHi" />
    <div class="flex flex-col justify-center items-center">
        <input @input="updateText" @keypress.enter="sendToHi" class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
            hover:ring ring-blue-300 linear duration-200" />
        <h1 class="mx-4 font-bold text-6xl">{{ text }}</h1>
        <div class="flex items-center gap-5">
            <h1>header color : </h1>
            <input @keypress.enter="changeColor" class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
            hover:ring ring-blue-300 linear duration-200" />
        </div>
        <div class="flex flex-col items-center">
            <div class="flex items-center gap-5">
                <h1>v-model : </h1>
                <input v-model="model" class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
                hover:ring ring-blue-300 linear duration-200" />
            </div>
            <h1 class="mx-4 font-bold text-6xl">{{ model }}</h1>
        </div>
    </div>
    <Test />
    <div>
        <List />
    </div>
    <div>
        <Modal />
    </div>
    <div class="flex flex-col items-center">
        <TransitionTest />
    </div>
</template>