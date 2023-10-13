<script setup>
import { ref } from 'vue'
const teste = ref(null)
const visible = ref(false)
const foo = ref('foo')
const bar = ref('bar')
defineExpose({
  foo,
  bar,
})

</script>
<template>
    <section>
        <input type="text" v-model="teste">
        <button @click="visible = !visible">Visible</button>
        <h1 class="text-gray-500" v-if="visible">{{ teste }}</h1>
    </section>
</template>
