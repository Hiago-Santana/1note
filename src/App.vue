<script setup>

import { onMounted, ref } from 'vue'
import { addNote, readAllNote, deleteNote, setNote, openDataBase } from './components/indexeddb'
//import {  loadSearchNote } from './components/searchFlex'
import Index from 'flexsearch';


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
const index = ref(new Index({ tokenize: "full" }));

async function noteWhitoutCharacters() {
  //Get data from database and reload notes
  allNoteLowerCase.value = [];
  const note = await readAllNote();
  const size = note.length;
  //console.log("note",note)

  for (let i = 0; size > i; i++) {
    const title1 = note[i].title;
    const titleLower = title1.toLowerCase(title1);
    const title = titleLower.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    const description1 = note[i].description;
    const descriptionLower = description1.toLowerCase(description1);
    const description = descriptionLower.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    const id = note[i].id;

    allNoteLowerCase.value.push([{ title, description, id }])
  }
}

async function searchNote() {
  if (valueSearchCopy.value != valueSearch.value) {
    valueSearchCopy.value = valueSearch.value;
    console.log("valueSearch.value",valueSearch.value)
    const content = valueSearch.value.length;
    if (content > 0) {
      toggleSearch.value = true;
      searchResult.value = [];
      const result = index.value.search(valueSearch.value);
      const size = result.length;

      for (let i = 0; i < size; i++) {
        const id = result[i];
        const title = allNote.value.find(Element => Element.id == id).title
        const description = allNote.value.find(Element => Element.id == id).description
        //const resultSearch = [];
        searchResult.value.push([{ id, title, description }]);
      }
    } else
      if (searchResult.value.length > 0) {
        toggleSearch.value = true;
      }
  }
  console.log("searchNote",searchResult.value)
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
    const idArray = allNote.value[i].id;
    if (idArray === id) {
      indexNote.value = "";
      const title = allNote.value[i].title;
      const description = allNote.value[i].description;
      indexNote.value = [id, title, description];
      indexNoteCopy.value = [id, title, description];
      toggleModal.value = true;
    }
  }
  console.log("indexNote", indexNote.value)
}

async function reloadNote() {
  //Get data from database and reload notes
  allNote.value = [];
  allNote.value = await readAllNote();
  const size = allNote.value.length;
  console.log("allNote.value",allNote.value)

  for (let i = 0; size >= i; i++) {
    const title = allNote.value[i].title;
    console.log("title",title)
    const description = allNote.value[i].description;
    const id = allNote.value[i].id;
    //allNote.value.push([{ title, description, id }])
    index.value.add(id, title);
    index.value.append(id, description)
  }
  console.log("index.value",index.value)
}

async function addTitleDescription(index) {
  //Add title and description to database
  const title = enteredTitle.value;
  const description = enteredDescription.value;
  if (title != "" || description != "") {
    await addNote(title, description);
    const note = await readAllNote();
    allNote.value = note;
    enteredTitle.value = "";
    enteredDescription.value = "";
    toggleTitle.value = false;
    noteWhitoutCharacters();
    reloadNote();
  }
  buttonEnterNote.value = false;
  console.log(buttonEnterNote);
}

const removeNote = () => {
  //Delete note
  const id = indexNote.value[0];
  deleteNote(id);
  reloadNote();
  valueSearchCopy.value = null;
searchNote();
  toggleModal.value = false;
  console.log("id",id)
  console.log("indexbefore",index.value)
//   //index.value.remove(id)
//   //const indexsearch = searchResult.value.indexOf.id(id)
//   console.log("searchResultBefore",searchResult.value[1][0].id)

//   for(var i = 0; i <= searchResult.value.length - 1; i++){
//     if(searchResult.value[i][0].id == id){
//       searchResult.value[i].splice(0,3);
//     }
// }
// console.log("searchResultAfter",searchResult.value)
  
//   //const myNewArray = searchResult.value.filter(function(item){ return item[0] != id})
//   console.log("myNewArray",myNewArray)
//   console.log("indexsearch",indexsearch)
//   console.log("indexAfter",index.value)
//   //valueSearchCopy.value = null;
//   //searchNote();
//reloadNote();


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
          <p class="font-normal text-start dark:bg-zinc-900">{{ entered[0].description }}</p>
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
            v-for="entered in allNote" :key="entered" @click="viewNote(entered.id), toggleTitle = false">{{
              entered.title
            }}
            <p class="font-normal text-left dark:bg-zinc-900">{{ entered.description }}</p>
          </div>
        </div>
      </div>

      <!-- button to enter note when width screen is smaller than 500px -->
      <footer v-if="toggleWidht && !toggleSearch" class="fixed bottom-0 rigth-0 pb-4 place-self-end">
        <button @click="buttonEnterNote = true, toggleModal = true, teste()"><font-awesome-icon
            icon="fa-solid fa-circle-plus" size="2xl" />
        </button>
      </footer>
    </div>

    <!-- Edit note when screen width is smallet than 500px -->
    <div v-if="toggleModal && !buttonEnterNote" class="p-[2rem]">
      <div class="grid grid-cols-2">
        <button class="place-self-start"
          @click="addTitleDescription(index), editeNote(), toggleModal = false"><font-awesome-icon
            icon="fa-solid fa-arrow-left" /></button>
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
        class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1"
        placeholder="Nota" required style=""></textarea>
    </div>

    <!-- Add note when screen width is smallet than 500px -->
    <div v-if="buttonEnterNote" class="p-[2rem]">
      <div class="grid grid-cols-2">
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
