<script setup>
import { ref } from 'vue'
import { createAcount, logInCount } from './worker'
//import { reloadNote } from '../App.vue';

defineExpose({
    logIn,
    token
})
const logIn = ref(false);
const token = ref(null);
const buttonSignUpLogIn = ref(false);
const logEmail = ref('hiago@hotmail.com');
const logPassword = ref("123456");
const mensageAlerte = ref(null);

const sigUp = () => {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValidate = re.test(cAEmail.value);
    if (cAName.value == null || cAName.value == "") {
        mensageAlerte.value = "Preencha o campo nome."
        console.log("Erro nome", cAName.value)
    }
    else if (emailValidate == false) {
        mensageAlerte.value = "Insira um email válido."

    } else if (cAPassword.value == null || cAPassword.value.length < 6) {
        mensageAlerte.value = "Insira uma senha com mais de 5 caracteres"
    }
    else {
        //console.log("Sucesso")
        createAcount("createAcount", cAName.value, cAEmail.value, cAPassword.value)
    }
}

async function userLog(logEmail, logPassword) {

    resultCloundLogin = await logInCount(logEmail, logPassword)
    if (resultCloundLogin.userAuthentication.authentication == true) {
        logIn.value = true;
        token.value = resultCloundLogin.userAuthentication.token
        reloadNote()
    }
}

</script>
<template>
    <section>
        <div v-if="!logIn && !buttonSignUpLogIn" class="grid content-end mx-8 h-full">
            <h1 class="text-2xl mb-1 text-blue-500">1 Note</h1>
            <h2 class="mb-10 text-sm">Suas anotações em um único lugar.</h2>
            <button @click="buttonSignUpLogIn = 'log'" class="mb-2 bg-blue-500 rounded-md p-1">Log in</button>
            <button @click="buttonSignUpLogIn = 'sigUp'"
                class="mb-40 dark:bg-zinc-900 border-2 border-blue-500 rounded-md p-1">Sign
                up</button>

        </div>
        <div v-if="!logIn && buttonSignUpLogIn == 'sigUp'" class="grid content-center mx-8 h-screen">
            <div class="grid grid-cols-1 grid-rows-2 content-center mx-8 h-screen">
                <h1 class="text-2xl text-blue-500 grid content-center">Crie uma conta</h1>
                <div class="grid content-center h-full">
                    <p class="text-red-600">{{ mensageAlerte }}</p>
                    <input type="text" placeholder="nome" v-model="cAName" class="mb-2 bg-inherit focus:outline-none">
                    <input type="text" placeholder="email" v-model="cAEmail" class="mb-2 bg-inherit focus:outline-none">
                    <input type="text" placeholder="senha" v-model="cAPassword" class="mb-2 bg-inherit focus:outline-none">
                    <button @click="sigUp()" class="mb-2 mt-4 bg-blue-500 rounded-md p-1">Sign up</button>
                    <p class="grid justify-items-center">or</p>
                    <button class="mt-2 bg-inneret rounded-md p-1 border-blue-500">Log in</button>
                </div>
            </div>
        </div>
        <div v-if="!logIn && buttonSignUpLogIn == 'log'" class="grid content-center mx-8 h-screen">
            <div class="grid grid-cols-1 grid-rows-2 content-center mx-8 h-screen">
                <h1 class="text-2xl text-blue-500 grid content-center">Bem vindo de volta</h1>
                <div class="grid content-center h-full">
                    <p class="text-red-600">{{ mensageAlerte }}</p>
                    <input type="text" placeholder="email" v-model="logEmail" class="mb-2 bg-inherit focus:outline-none">
                    <input type="text" placeholder="senha" v-model="logPassword" class="mb-2 bg-inherit focus:outline-none">
                    <button @click="userLog(logEmail, logPassword)" class="mb-2 mt-4 bg-blue-500 rounded-md p-1">Log
                        in</button>
                    <p class="grid justify-items-center">or</p>
                    <button class="mt-2 bg-inneret rounded-md p-1 border-blue-500">Sign Up</button>
                </div>
            </div>
        </div>
    </section>
</template>