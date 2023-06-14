<script setup>

import { onMounted, ref } from 'vue'
import { addNote, readAllNote, deleteNote, setNote } from './components/indexeddb'

const enteredTitle = ref('');
const enteredDescription = ref('');
const indexNote = ref([]);
const toglleModal = ref(false);
const indexDelete = ref();
const allNote = ref([]);
const testando = ref("");
const toglleTitle = ref(false);

const viewNote = (id) => {
  //get the size of the inner array 
  const size = allNote.value.length;
  for (let i = 0; i < size; i++) {
    const idArray = allNote.value[i][0].id;
    if (idArray === id) {
      indexNote.value = "";

      const title = allNote.value[i][0].title;
      const description = allNote.value[i][0].description;
      indexNote.value = [id, title, description];
      toglleModal.value = true;
      // allNote.value[i][2] = true;     
      indexDelete.value = i;
    }
  }
}

async function reloadNote() {
  //load the page when opened
  allNote.value = [];
  const note = [await readAllNote()];
  const size = note[0].length;

  for (let i = 0; size > i; i++) {
    const title = note[0][i].title;
    const description = note[0][i].description;
    const display = note[0][i].display;
    const id = note[0][i].id;
    allNote.value.push([{ title, description, display, id }])
  }
}

async function addTitleDescription(index) {
  //console.log("teste1")
  const title = enteredTitle.value;
  const description = enteredDescription.value;
  const display = false;
  await addNote(title, description);
  const note = [await readAllNote()];
  const size = note[0].length - 1;
  const id = note[0][size].id;
  console.log(allNote.value);
  allNote.value.push([{ title, description, display, id }])
  console.log(allNote.value);
  enteredTitle.value = "";
  enteredDescription.value = "";
  toglleTitle.value = false;
}

const removeNote = () => {
  const id = indexNote.value[0];
  deleteNote(id);
  reloadNote();
  toglleModal.value = false;
}

const editeNote = () => {
  const id = indexNote.value[0];
  const title = indexNote.value[1];
  const description = indexNote.value[2];
  //console.log(id, title, description)

  setNote(id, title, description);
  toglleModal.value = false;
}

//load the function when page opened
onMounted(
  reloadNote()
);

</script>

<template>
  <section  class="h-screen flex flex-col ">
    <!-- <div class="flex justify-center ">
        <div
          class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md">
          <input id="title" type="text" v-model="enteredTitle" placeholder="Título"
            class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none" />
          <input id="description" type="text" v-model="enteredDescription" placeholder="Escreva uma nota"
            class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none" />
          <button id="btnsave" @click="addTitleDescription(index)"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Salvar</button>
        </div>
      </div> -->
    <div class="flex justify-center ">
      <div
        class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md">
        <input @click="toglleTitle = true" id="title" type="text" v-model="enteredTitle" placeholder="Título"
          class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none" />
        <div v-if="toglleTitle" class="">
          <input id="description" type="text" v-model="enteredDescription" placeholder="Escreva uma nota"
            class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none" />
          <button id="btnsave" @click="addTitleDescription(index)"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Salvar</button>
        </div>
      </div>
    </div>
    <div class="">
      <div class="xl:grid xl:grid-cols-9 md:grid md:grid-cols-7 gap-4 sm:grid sm:grid-cols-2">
        <div
          class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)]"
          v-for="entered in allNote" :key="entered" @click="viewNote(entered[0].id),toglleTitle=false">{{ entered[0].title }}
          <p class="font-normal text-center">{{ entered[0].description }}</p>
        </div>
      </div>
    </div>
    <!--modal-->
    <div>
      <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 overscroll-none "
        v-if="toglleModal">
        <div class="relative wx-auto max-w-2xl w-96 max-h-full my-20">
          <div class="bg-white dark:bg-gray-900 w-full rounded  shadow-2xl flex flex-col p-4">
            <input :value="indexNote[1]" @input="event => indexNote[1] = event.target.value"
              class="text-2xl font-bold focus:outline-none">
            <input :value="indexNote[2]" @input="event => indexNote[2] = event.target.value"
              class="overflow-auto focus:outline-none">
            <div class="items-baseline">
              <button class="rounded bg-red-500 hover:bg-red-600 text-white px-6 mt-1 py-1 w-3/12 mb-3 m-2"
                @click="toglleModal = false">Close</button>
              <button class="rounded bg-gray-500 hover:bg-gray-600 text-white px-6 mt-1 py-1 w-3/12 mb-3 m-2"
                @click="removeNote">Delete</button>
              <button class="rounded bg-green-500 hover:bg-green-600 text-white px-6 mt-1 py-1 w-3/12 mb-3 m-2"
                @click="editeNote">Save</button>
            </div>

          </div>
        </div>
      </div>
      <div v-if="toglleModal" class="absolute z-40 inset-0 opacity-25 bg-black overscroll-none">
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap');


@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
