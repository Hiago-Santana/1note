<script setup>

import { onMounted, ref } from 'vue'
import { addNote, readAllNote, deleteNote, setNote } from './components/indexeddb'
//import {  loadSearchNote } from './components/searchFlex'


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
const valueSearchCopy = ref();
const buttonEnterNote = ref(false);
const searchFlexNote = ref();


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
  if (valueSearchCopy.value != valueSearch.value) {
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
    valueSearchCopy.value = valueSearch.value;
  }
}

const returnSearch = () => {
  searchResult.value = "";
  valueSearch.value = "";
  toggleSearch.value = false;
}

function toggleScreen() {
  screenWidth.value = window.innerWidth;
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
  //searchFlexNote.value = loadSearchNote ();

  for (let i = 0; size > i; i++) {
    const title = note[0][i].title;
    const description = note[0][i].description;
    const id = note[0][i].id;
    allNote.value.push([{ title, description, id }])
  }
  console.log("searchFlexNote",searchFlexNote)
}

async function addTitleDescription(index) {
  //Add title and description to database
  const title = enteredTitle.value;
  const description = enteredDescription.value;
  if (title != "" || description != "") {
    await addNote(title, description);
    const note = [await readAllNote()];
    const size = note[0].length - 1;
    const id = note[0][size].id;
    allNote.value.push([{ title, description, id }])
    enteredTitle.value = "";
    enteredDescription.value = "";
    toggleTitle.value = false;
    noteWhitoutCharacters();
  }
  buttonEnterNote.value = false;
  console.log(buttonEnterNote);
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
  noteWhitoutCharacters();
  toggleModal.value = false;
}

// const buttonEnterNote = () => {
//   enterNote.value = true;
// }

//load the function when page is opened
onMounted(() => {
  reloadNote(),
    noteWhitoutCharacters(),
    window.addEventListener('resize', toggleScreen),
    toggleScreen();
});

</script>

<template>
  <section>

    <!-- header -->
    <!-- sticky linha 199 e  299-->
    <nav v-if="!toggleModal"
      class="sticky w-full top-0 bg-white p-2 drop-shadow shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)]  dark:bg-zinc-900 mb-2">
      <div class="flex justify-center bg-gray-100 p-2 rounded-md dark:bg-zinc-800">
        <span v-if="toggleSearch">
          <button @click="returnSearch"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
        </span>
        <input v-bind="searchNote()" :value="valueSearch" @input="event => valueSearch = event.target.value"
          placeholder="Pesquise suas notas"
          class="bg-gray-100  break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-800">
      </div>
    </nav>

    <!-- Body -->
    <div v-if="!buttonEnterNote && !toggleModal" class="h-screen flex flex-col w-full dark:bg-zinc-900 p-[2rem] py-0">
      <div class="grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900">
        <div
          class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900"
          v-for="entered in searchResult" :key="entered" @click="viewNote(entered[0].id), toggleTitle = false">{{
            entered[0].title
          }}
          <p class="font-normal text-center dark:bg-zinc-900">{{ entered[0].description }}</p>
        </div>
      </div>

      <!-- Enter note when screen is large than 500px -->
      <div v-if="!toggleSearch">
        <div v-if="!toggleWidht" class="flex justify-center ">
          <div
            class="w-[30rem] shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] p-1 rounded-md dark:bg-zinc-900 mb-2">
            <div v-if="toggleTitle" class="grid grid-cols-2">
              <button class="place-self-start"
                @click="addTitleDescription(index), toggleTitle = false, toggleModal = false"><font-awesome-icon
                  icon="fa-solid fa-arrow-left" /></button>
              <button v-if="enteredTitle || enteredDescription"
                @click="toggleTitle = false, enteredTitle = null, enteredDescription = null"
                class="place-self-end"><font-awesome-icon icon="fa-solid fa-trash" style="color: #707070;" />
              </button>
            </div>
            <input @click="toggleTitle = true" id="title" type="text" v-model="enteredTitle" placeholder="Título"
              class="text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
            <div v-if="toggleTitle">
              <textarea v-model="enteredDescription" rows="5" autoResize
                class="m-1 overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900"
                placeholder="Criar uma nota" required style=""></textarea>
            </div>
          </div>
        </div>

        <!-- view saved notes -->
        <div class="grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900 pb-4">
          <div
            class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)]  p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900 dark:shadow-none dark:border-2 dark:border-gray-700"
            v-for="entered in allNote" :key="entered" @click="viewNote(entered[0].id), toggleTitle = false">{{
              entered[0].title
            }}
            <p class="font-normal text-left dark:bg-zinc-900">{{ entered[0].description }}</p>
          </div>
        </div>
      </div>



      <!--modal view note -->
      <!-- <div>
        <div
          class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 overscroll-none "
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
      </div> -->

      <!-- button to enter note when width screen is smaller than 500px -->

      <footer v-if="toggleWidht && !toggleSearch" class="fixed bottom-0 rigth-0 pb-4 place-self-end">
        <button @click="buttonEnterNote = true, toggleModal = true"><font-awesome-icon icon="fa-solid fa-circle-plus"
            size="2xl" />
        </button>
      </footer>
    </div>

    <!-- Edit note when screen width is smallet than 500px -->
    <div v-if="toggleModal && !buttonEnterNote" class="p-[2rem]">
      <div class="grid grid-cols-2">
        <button class="place-self-start"
          @click="addTitleDescription(index), editeNote(), toggleModal = false"><font-awesome-icon
            icon="fa-solid fa-arrow-left" /></button>
        <!-- <span class="place-self-center"><button v-if="toggleSave" id="buttonSave"
            class="font-medium place-self-center rounded-full hover:bg-gray-100 text-gray px-2 my-0 py-0 w-12/12 mx-3"
            @click="editeNote">Save</button></span> -->
        <button @click="toggleModal = false, removeNote()" class="place-self-end"><font-awesome-icon
            icon="fa-solid fa-trash" style="color: #707070;" />
        </button>
      </div>
      <input v-bind="ViewSave()" :value="indexNote[1]" @input="event => indexNote[1] = event.target.value"
        placeholder="Título"
        class="text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
      <!-- <input type="text" rows="4" v-model="enteredDescription" placeholder="Escreva uma nota"
        class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900 h-96 bg-black" />  -->
      <textarea v-bind="ViewSave()" :value="indexNote[2]" @input="event => indexNote[2] = event.target.value" rows="35"
        class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900"
        placeholder="Nota" required style=""></textarea>
    </div>

    <!-- Add note when screen width is smallet than 500px -->
    <div v-if="buttonEnterNote" class="p-[2rem]">
      <div class="grid grid-cols-2" >
        <button @click="addTitleDescription(index), toggleModal = false" class="place-self-start"><font-awesome-icon
            icon="fa-solid fa-arrow-left" /></button>
        <button v-if="enteredTitle || enteredDescription"
          @click="buttonEnterNote = false, toggleModal = false, enteredTitle = null, enteredDescription = null"
          class="place-self-end"><font-awesome-icon icon="fa-solid fa-trash" style="color: #707070;" />
        </button>
      </div>
      <input type="text" v-model="enteredTitle" placeholder="Título"
        class="text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
      <!-- <input type="text" rows="4" v-model="enteredDescription" placeholder="Escreva uma nota"
        class="break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900 h-96 bg-black" />  -->
      <textarea v-model="enteredDescription" rows="35"
        class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 m-2 bg-white border-0 dark:bg-zinc-900"
        placeholder="Nota" required style=""></textarea>
    </div>
  </section>
</template>

<style scoped></style>
