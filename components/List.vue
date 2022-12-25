<script lang="ts" setup>
const list = [1, 2, 3, 4, 5, 6, 7];
</script>
<template>
    <table class="flex flex-col items-center border">
        <tr>
            <td>list</td>
        </tr>
        <tr v-for="i of list">
            <td>{{ i }}</td>
        </tr>
    </table>

</template>