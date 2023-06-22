<script setup>

import { onMounted, ref } from 'vue'
import { addNote, readAllNote, deleteNote, setNote } from './components/indexeddb'

const enteredTitle = ref('');
const enteredDescription = ref('');
const indexNote = ref([]);
const toggleModal = ref(false);
const indexNoteCopy = ref([]);
const allNote = ref([]);
const toggleTitle = ref(false);
const toggleSave = ref(false);
const disabled = ref(false)
const screenWidth = ref(window.innerWidth)
const toggleWidht = ref('');
const valueSearch = ref('');
const allNoteLowerCase = ref([]);
const searchResult = ref([]);
const toggleSearch = ref(false);


async function noteWhitoutCharacters() {
  //Get data from database and reload notes
  allNoteLowerCase.value = [];
  const note = [await readAllNote()];
  const size = note[0].length;

  for (let i = 0; size > i; i++) {
    const title1 = note[0][i].title;
    const titleLower = title1.toLowerCase(title1);
    const title = titleLower.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    const description1 = note[0][i].description;
    const descriptionLower = description1.toLowerCase(description1);
    const description = descriptionLower.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    const id = note[0][i].id;

    allNoteLowerCase.value.push([{ title, description, id }])
  }
}

const searchNote = () => {
  const content = valueSearch.value.length;
  if (content > 0) {
    toggleSearch.value = true;
    const size = allNoteLowerCase.value.length;
    const search1 = valueSearch.value;
    const search1Lower = search1.toLowerCase(search1);
    const search = search1Lower.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    searchResult.value = [];
    // console.log("size", size)
    for (let i = 0; i < size; i++) {

      const title = allNoteLowerCase.value[i][0].title;
      const description = allNoteLowerCase.value[i][0].description;
      const titleIndex = title.indexOf(search);
      const descriptionIndex = description.indexOf(search);
      if (titleIndex >= 0 || descriptionIndex >= 0) {
        const title = allNote.value[i][0].title;
        const description = allNote.value[i][0].description;
        const id = allNoteLowerCase.value[i][0].id;
        searchResult.value.push([{ id, title, description }]);
      }
    }

  } else
    if (searchResult.value.length > 0) {
      toggleSearch.value = true;
      console.log("content", content)
      console.log("toggleSearch", toggleSearch.value)
    }
}

const returnSearch = () => {
  searchResult.value = "";
  valueSearch.value = "";
  toggleSearch.value = false;
}


function toggleScreen() {
  screenWidth.value = window.innerWidth;
  console.log("screenWidth",screenWidth)
  if (screenWidth.value < 500) {
    toggleWidht.value = true;
    //console.log("largura da tela < 500", screenWidth.value)
  } else {
    //toggleWidht.value = false;
    toggleWidht.value = false;
  }
}

const ViewSave = () => {
  if (indexNote.value[1] != indexNoteCopy.value[1] || indexNote.value[2] != indexNoteCopy.value[2]) {
    setTimeout(() => {
      toggleSave.value = true;
    }, 150)
    disabled.value = true;
  } else {
    toggleSave.value = false;
    disabled.value = false;
  }
}

const viewNote = (id) => {
  //see note when clicked 
  const size = allNote.value.length;
  for (let i = 0; i < size; i++) {
    const idArray = allNote.value[i][0].id;
    if (idArray === id) {
      indexNote.value = "";
      const title = allNote.value[i][0].title;
      const description = allNote.value[i][0].description;
      indexNote.value = [id, title, description];
      indexNoteCopy.value = [id, title, description];
      toggleModal.value = true;
    }
  }
}

async function reloadNote() {
  //Get data from database and reload notes
  allNote.value = [];
  const note = [await readAllNote()];
  const size = note[0].length;

  for (let i = 0; size > i; i++) {
    const title = note[0][i].title;
    const description = note[0][i].description;
    const id = note[0][i].id;
    allNote.value.push([{ title, description, id }])
  }
}

async function addTitleDescription(index) {
  //Add title and description to database
  const title = enteredTitle.value;
  const description = enteredDescription.value;
  await addNote(title, description);
  const note = [await readAllNote()];
  const size = note[0].length - 1;
  const id = note[0][size].id;
  allNote.value.push([{ title, description, id }])
  enteredTitle.value = "";
  enteredDescription.value = "";
  toggleTitle.value = false;
}

const removeNote = () => {
  //Delete note
  const id = indexNote.value[0];
  deleteNote(id);
  reloadNote();
  toggleModal.value = false;
}

const editeNote = () => {
  //Edite note
  const id = indexNote.value[0];
  const title = indexNote.value[1];
  const description = indexNote.value[2];
  setNote(id, title, description);
  reloadNote();
  toggleModal.value = false;
}

//load the function when page is opened
onMounted(() => {
  reloadNote(),
    noteWhitoutCharacters(),
    window.addEventListener('resize', toggleScreen)
    toggleScreen();    
});

</script>

<template>
  <section class="h-screen flex flex-col w-full dark:bg-zinc-900">

    <!-- search value -->
    <div
      class="flex justify-center shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md dark:bg-zinc-900 mb-2">
      <span v-if="toggleSearch">
        <button @click="returnSearch"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
      </span>
      <input v-bind="searchNote()" :value="valueSearch" @input="event => valueSearch = event.target.value"
        placeholder="Pesquise suas notas"
        class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900">
    </div>

    <!-- display search value -->
    <div class="">
      <div class="grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900">
        <div
          class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900"
          v-for="entered in searchResult" :key="entered" @click="viewNote(entered[0].id), toggleTitle = false">{{
            entered[0].title
          }}
          <p class="font-normal text-center dark:bg-zinc-900">{{ entered[0].description }}</p>
        </div>
      </div>
    </div>

    <!-- Enter note when screen is large than 500px -->
    <div v-if="!toggleSearch">
      <div v-if="!toggleWidht" class="flex justify-center ">
        <div
          class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-2 rounded-md dark:bg-zinc-900 mb-2">
          <input @click="toggleTitle = true" id="title" type="text" v-model="enteredTitle" placeholder="Título"
            class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
          <div v-if="toggleTitle" class="">
            <input id="description" type="text" v-model="enteredDescription" placeholder="Escreva uma nota"
              class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
            <button id="btnsave" @click="addTitleDescription(index)"
              class="bg-blue-500 hover:bg-blue-700 text-white-950 font-bold py-2 px-4 rounded ">Salvar</button>
          </div>
        </div>
      </div>

      <!-- view saved notes -->

      <div class="">
        <div class="grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900">
          <div
            class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900"
            v-for="entered in allNote" :key="entered" @click="viewNote(entered[0].id), toggleTitle = false">{{
              entered[0].title
            }}
            <p class="font-normal text-center dark:bg-zinc-900">{{ entered[0].description }}</p>
          </div>
        </div>
      </div>

      <!-- button to enter note when screen is smaller than 500px -->

      <footer v-if="toggleWidht" class="sticky bottom-0 grid justify-items-end content-end h-full pb-8">
        <button class="content-end"><font-awesome-icon icon="fa-solid fa-circle-plus" size="2xl" />
        </button>
      </footer>

      <!--modal view note -->

    </div>
    <div>
      <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 overscroll-none "
        v-if="toggleModal">
        <div class="relative wx-auto max-w-2xl w-96 max-h-full my-20 ">
          <div class="bg-white dark:bg-zinc-900 w-full rounded  shadow-2xl flex flex-col pt-0 pb-4 px-4 ">
            <div class="place-self-end">
              <button class="rounded-full hover:bg-gray-100 p-1 w-[30px] h-30px"
                @click="toggleModal = false"><font-awesome-icon icon="fa-solid fa-xmark"
                  style="color: #707070;" /></button>
            </div>
            <input v-bind="ViewSave()" :value="indexNote[1]" @input="event => indexNote[1] = event.target.value"
              class="text-2xl font-bold focus:outline-none dark:bg-zinc-900">
            <input v-bind="ViewSave()" :value="indexNote[2]" @input="event => indexNote[2] = event.target.value"
              class="overflow-auto focus:outline-none dark:bg-zinc-900">
            <div class="items-baseline place-self-end">
              <span v-if="toggleSave" class="{ buttonSave }">
                <button id="buttonSave" class="rounded-full hover:bg-gray-100 text-gray px-2 my-0 py-0 w-12/12 mx-3"
                  @click="editeNote">Save</button>
              </span>
              <div :class="{ shake: disabled }">
                <span class="rounded-full hover:bg-gray-100 p-1 w-[30px] m-3 mb-5 h-30px">
                  <button @click="removeNote"><font-awesome-icon icon="fa-solid fa-trash"
                      style="color: #707070;" /></button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="toggleModal" class="absolute z-40 inset-0 opacity-70 bg-black overscroll-none">
      </div>
    </div>
  </section>
</template>

<style scoped></style>
