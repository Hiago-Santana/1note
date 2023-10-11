<script>
import { ref } from 'vue'
const teste = ref(null)
const visible = ref(false)

</script>
<template>
    <section>
        <input type="text" v-model="teste">
        <button @click="visible = true">Visible</button>
        <h1 v-if="visible">{{ teste }}</h1>
    </section>
</template>
