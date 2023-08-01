<script setup>

import { onMounted, ref } from 'vue'
import { addNote, readAllNote, deleteNote, setNote } from './components/indexeddb'
import Index from 'flexsearch';

const enteredTitle = ref(null);
const enteredDescription = ref(null);
const indexNote = ref(null);
const toggleModal = ref(false);
const indexNoteCopy = ref(null);
const allNote = ref([]);
const toggleTitle = ref(false);
const screenWidth = ref(window.innerWidth)
const toggleWidht = ref('');
const valueSearch = ref(null);
const searchResult = ref([]);
const toggleSearch = ref(false);
const valueSearchCopy = ref(null);
const buttonEnterNote = ref(false);
const index = new Index({ tokenize: "full" });
const noNote = ref(false);
const descriptionList = ref(false);
const enteredListDescription = ref([]);
const textlist = ref();
const checkedBox = ref(false);
const newEnteredDescription = ref(null);
const checkedBoxItem = ref();
const descriptionEdite = ref("");
const checkBoxValue = ref("");
const addChecKBox = ref(false);
const trashButton = ref(false)

async function searchNote() {
  if (valueSearchCopy.value != valueSearch.value) {
    valueSearchCopy.value = valueSearch.value;
    const content = valueSearch.value.length;
    if (content > 0) {
      toggleSearch.value = true;
      searchResult.value = [];
      const result = index.search(valueSearch.value);
      const size = result.length;

      for (let i = 0; i < size; i++) {
        const id = result[i];
        const title = allNote.value.find(Element => Element.id == id).title
        const description = allNote.value.find(Element => Element.id == id).description
        searchResult.value.push({ id: id, title: title, description: description });
      }
    } else
      if (searchResult.value.length > 0) {
        toggleSearch.value = true;
      }
  }
  
}

const returnSearch = () => {
  searchResult.value = null;
  valueSearch.value = null;
  toggleSearch.value = false;
}

function toggleScreen() {
  screenWidth.value = window.innerWidth;
  if (screenWidth.value < 500) {
    toggleWidht.value = true;
  } else {
    toggleWidht.value = false;
  }
}

const viewNote = (id) => {
  //see note when clicked 
  const size = allNote.value.length;
  for (let i = 0; i < size; i++) {
    const idArray = allNote.value[i].id;
    if (idArray === id) {
      indexNote.value = null;
      const title = allNote.value[i].title;
      const descriptionValue = { 'value': allNote.value[i].description };
      console.log("descriptionValue", descriptionValue.value)
      const testArray = Array.isArray(descriptionValue.value)

      if (testArray) {
        const sizeDescription = descriptionValue.value.length
        const descriptionList = { 'value': [] };
        for (let i = 0; i < sizeDescription; i++) {
          descriptionList.value.push({ checkBox: descriptionValue.value[i].checkBox, description: descriptionValue.value[i].description })
        }
        console.log("descripionList", descriptionList.value)
        descriptionValue.value = descriptionList.value
      }
      indexNote.value = { id: id, title: title, description: descriptionValue.value };
      indexNoteCopy.value = { id: id, title: title, description: descriptionValue.value };
      toggleModal.value = true;
    }
  }
  enteredDescription.value = null
}

async function reloadNote() {
  //Get data from database and reload notes  
  allNote.value = await readAllNote()
  const size = allNote.value.length;

  for (let i = 0; i < size; i++) {
    const title = allNote.value[i].title;
    const description = { 'value': null }
    description.value = allNote.value[i].description;
    const jsonTeste = isJson(description.value)
    const id = allNote.value[i].id;

    if (jsonTeste) {
      description.value = JSON.parse(description.value)
      allNote.value[i].description = description.value
    }
    index.add(id, title);
    index.append(id, description)
  }

  if (size == 0) {
    noNote.value = true;
  }
}

function isJson(str) {
  //Test if it's a json
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

async function addTitleDescription(index) {
  //Add title and description to database
  const title = enteredTitle.value;
  const description = { 'value': null };

  if (descriptionList.value == true) {
    if (enteredDescription.value != null && enteredDescription.value != "") {
      console.log("enteredListDescription.value", enteredListDescription.value)
      enteredListDescription.value.push({ checkBox: checkedBox.value, description: enteredDescription.value });
    }
    description.value = JSON.stringify(enteredListDescription.value)
  } else {
    description.value = enteredDescription.value;
  }

  if (title != null || description.value != null) {
    await addNote(title, description.value);
    const note = await readAllNote();
    allNote.value = note;
    enteredTitle.value = null;
    enteredDescription.value = null;
    toggleTitle.value = false;
    noNote.value = false;
    reloadNote();
  } else {
    if (allNote.value == "") {
      noNote.value = true
    }
  }
  buttonEnterNote.value = false;
  enteredListDescription.value = []

}

const removeNote = () => {
  //Delete note
  const id = indexNote.value.id;
  deleteNote(id);
  index.remove(id);
  reloadNote();
  valueSearchCopy.value = null;
  searchNote();
  toggleModal.value = false;
}

const editeNote = (trash) => {
  //Edite note
  toggleModal.value = false;
  console.log("trash", trash)
  if (trash != null) {
    console.log("trash", trash)
    console.log("indexNote.value editNote 1", indexNote.value)
    indexNote.value.description.splice(trash, 1)
    console.log("indexNote.value editNote 2", indexNote.value)
    toggleModal.value = true;
  }

  if (enteredDescription.value != null) {
    console.log("enteredDescription.value", enteredDescription.value)
    const checkBox = checkedBox.value;
    indexNote.value.description.push({ checkBox: checkBox, description: enteredDescription.value });
    enteredDescription.value = null;
    toggleModal.value = true;
  }

  const id = indexNote.value.id;
  const title = indexNote.value.title;
  const description = { 'value': indexNote.value.description };
  const jsonTeste = { 'value': isJson(description.value) };
  console.log("editeNote CheckBox", indexNote.value.description)

  if (!jsonTeste.value) {
    description.value = JSON.stringify(description.value)
  }

  checkedBox.value = false;
  setNote(id, title, description.value);
  reloadNote();
  searchNote();
  enteredDescription.value = null;
}

const addDescriptionList = () => {
  //Add description list
  const checkBox = checkedBox.value;
  const description = { 'value': enteredDescription.value }
  if (description.value != null && description.value != "") {
    enteredListDescription.value.push({ checkBox: checkBox, description: description.value });
  }

  enteredDescription.value = null;
  checkedBox.value = false;
  //textlist.value.focus()
}

const deleteDescriptionItem = (idx) => {
  enteredListDescription.value.splice(idx, 1)
}

const editeDescriptionItem = (idx) => {
  //Edit description list

  if (newEnteredDescription.value === null && newEnteredDescription.value != "") {
    descriptionEdite.value = enteredListDescription.value[idx].description
    checkBoxValue.value = !enteredListDescription.value[idx].checkBox
  } else {
    descriptionEdite.value = newEnteredDescription.value
    checkBoxValue.value = enteredListDescription.value[idx].checkBox
  }

  enteredListDescription.value.splice(idx, 1, { checkBox: checkBoxValue.value, description: descriptionEdite.value })
  newEnteredDescription.value = null;
}

//load the function when page is opened
onMounted(() => {
  reloadNote(),
    window.addEventListener('resize', toggleScreen),
    toggleScreen();
});

</script>

<template>
  <section class="">

    <div v-if="!noNote || !toggleWidht">
      <!-- Search -->
      <nav v-if="!toggleModal && !noNote || toggleModal && !toggleWidht && !noNote"
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

      <!-- Search Result -->
      <div v-if="!buttonEnterNote && !toggleModal" class=" flex flex-col w-full dark:bg-zinc-900 p-[2rem] py-0 mb-4">
        <div class="grid xl:grid-cols-9 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900">
          <div
            class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900"
            v-for="entered in searchResult" :key="entered" @click="viewNote(entered.id), toggleTitle = false">{{
              entered.title
            }}
            <div v-if="Array.isArray(entered.description)">
              
              <div v-for="entereds in entered.description" :key="entereds" class="grid grid-cols-12">
                <input type="checkbox" :checked=entereds.checkBox
                  class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center mx-2 ">
                <input type="text" :value=entereds.description
                  class="col-start-2 col-span-11 ml-1 font-normal dark:bg-zinc-900">
              </div>
            </div>
            <div v-else>
              
              <p class="font-normal text-left dark:bg-zinc-900">{{ entered.description }}</p>
            </div>
            <!-- <p class="font-normal text-start dark:bg-zinc-900">{{ entered.description }}</p> -->
          </div>
        </div>
      </div>

      <!-- Enter note when screen is large than 500px -->
      <div v-if="!toggleSearch" class="w-full flex flex-col dark:bg-zinc-900 p-[2rem] py-0 pt-2">
        <div v-if="!toggleWidht" class="flex justify-center ">
          <div
            class="w-[30rem] shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] px-4 py-2 rounded-md dark:bg-zinc-900 mb-2">
            <div v-if="toggleTitle" class="grid grid-cols-3">
              <button class="place-self-start"
                @click="addTitleDescription(index), toggleTitle = false, toggleModal = false, descriptionList = false"><font-awesome-icon
                  icon="fa-solid fa-arrow-left" /></button>
              <button v-if="!descriptionList" @click="descriptionList = true" class="place-self-center"><font-awesome-icon
                  icon="fa-solid fa-list-check" /></button>
              <button v-if="enteredTitle || enteredDescription"
                @click="toggleTitle = false, enteredTitle = null, enteredDescription = null"
                class="place-self-end"><font-awesome-icon icon="fa-solid fa-trash" style="color: #707070;" />
              </button>
            </div>
            <input @click="toggleTitle = true" id="title" type="text" v-model="enteredTitle"
              placeholder="Crie um título para sua nota"
              class="text-lg font-medium break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />

            <div v-if="descriptionList && toggleTitle">
              <div v-for="(enteredListDescriptions, index) in enteredListDescription" :key=enteredListDescriptions
                class="grid grid-cols-12 group/item">
                <input type="checkbox" :checked=enteredListDescriptions.checkBox id="checkedBoxItem"
                  @change="editeDescriptionItem(index)"
                  class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center ">
                <input type="text" :value=enteredListDescriptions.description
                  v-on:keyup.enter="editeDescriptionItem(index)"
                  @input="event => newEnteredDescription = event.target.value"
                  class="col-start-2 col-span-10 focus:outline-none dark:bg-zinc-900">
                <button @click="deleteDescriptionItem(index)"><font-awesome-icon icon="fa-solid fa-x"
                    class="col-end-7 col-span-1 invisible group-hover/item:visible" /></button>
              </div>
              <div class="grid grid-cols-12">
                <input type="checkbox" id="checkbox" v-model="checkedBox"
                  class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center">
                <input type="text" v-model="enteredDescription" @blur="addDescriptionList()"
                  v-on:keyup.enter="addDescriptionList()" ref="textlist"
                  class="col-start-2 col-span-10 focus:outline-none dark:bg-zinc-900">
                <!-- <button><font-awesome-icon icon="fa-solid fa-x" class="col-end-7 col-span-1" /></button> -->
              </div>
              <div v-if="enteredDescription != null" class="col-start-1 col-span-12">
                <button @click="addChecKBox = true"><font-awesome-icon icon="fa-solid fa-plus"
                    class="object-contain h-4 w-4 place-self-center mx-1" /></button>
                <input type="text" v-on:keyup.enter="addDescriptionList()" placeholder="Item da lista"
                  @focus="addChecKBox = true" class="focus:outline-none dark:bg-zinc-900">
              </div>
            </div>
            <textarea v-if="toggleTitle && !descriptionList" v-model="enteredDescription" rows="5"
              class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 m-2 bg-white border-0 dark:bg-zinc-900"
              placeholder="Nota" required style=""></textarea>
          </div>
        </div>

        <!-- view saved notes -->
        <div v-if="!toggleModal || toggleModal && !toggleWidht"
          class="grid xl:grid-cols-7 xl:gap-4 md:grid-cols-5 md:gap-3 ph:grid-cols-2 ph:gap-2 dark:bg-zinc-900 pb-4">
          <div
            class="container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)]  p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900 dark:shadow-none dark:border-2 dark:border-gray-700"
            v-for="entered in allNote" :key="entered" @click="viewNote(entered.id), toggleTitle = false">
            <div v-if="Array.isArray(entered.description)">
              {{ entered.title }}
              <div v-for="entereds in entered.description" :key="entereds" class="grid grid-cols-12">
                <input type="checkbox" :checked=entereds.checkBox
                  class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center mx-2 ">
                <input type="text" :value=entereds.description
                  class="col-start-2 col-span-11 ml-1 font-normal dark:bg-zinc-900">
              </div>
            </div>
            <div v-else>
              {{ entered.title }}
              <p class="font-normal text-left dark:bg-zinc-900">{{ entered.description }}</p>
            </div>
          </div>
        </div>

        <!-- button to enter note when width screen is smaller than 500px -->
        <footer v-if="toggleWidht && !toggleSearch && !noNote && !toggleModal"
          class=" fixed bottom-0 rigth-0 pb-4 place-self-end">
          <button @click="buttonEnterNote = true, toggleModal = true"><font-awesome-icon icon="fa-solid fa-circle-plus"
              size="2xl" />
          </button>
        </footer>
      </div>

      <!-- Edit note when screen width is smallet than 500px -->
      <div v-if="toggleModal && !buttonEnterNote && toggleWidht" class="p-[2rem]">
        <div class="grid grid-cols-2">
          <button class="place-self-start"
            @click="editeNote(), toggleModal = false, addChecKBox = false"><font-awesome-icon
              icon="fa-solid fa-arrow-left" /></button>
          <button @click="toggleModal = false, removeNote()" class="place-self-end"><font-awesome-icon
              icon="fa-solid fa-trash" style="color: #707070;" />
          </button>
        </div>

        <div v-if="Array.isArray(indexNote.description)">
          <input :value="indexNote.title" @input="event => indexNote.title = event.target.value" placeholder="Título"
            class="text-2xl font-bold break-words input input-bordere border-0 w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
          <div v-for="(entered, index) in indexNote.description" :key="entered" class="grid grid-cols-12 group/item">
            <input type="checkbox" :checked=entered.checkBox
              @change="indexNote.description[index].checkBox = !indexNote.description[index].checkBox"
              class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center ">
            <input type="text" :value=entered.description v-on:keyup.enter="indexNote.description[0].description"
              @input="event => indexNote.description[index].description = event.target.value"
              class="col-start-2 col-span-10 focus:outline-none dark:bg-zinc-900">
            <button @click="editeNote(trash = index)" class="invisible group-hover/item:visible "><font-awesome-icon
                icon="fa-solid fa-x" class="col-end-7 col-span-1" /></button>
          </div>

          <div class="grid grid-cols-12">
            <div v-if="addChecKBox" class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center ">
              <input type="checkbox" id="checkbox" v-model="checkedBox" class="object-contain h-4 w-4 place-self-center ">
            </div>
            <div v-else>
              <button @click="addChecKBox = true"><font-awesome-icon icon="fa-solid fa-plus"
                  class="object-contain h-4 w-4 place-self-center mx-1" /></button>
            </div>
            <div class="col-start-2 col-span-10">
              <input type="text" v-on:keyup.enter="editeNote()" placeholder="Item da lista" v-model="enteredDescription"
                @focus="addChecKBox = true" @blur="editeNote()" class="focus:outline-none dark:bg-zinc-900">
            </div>
            <div v-if="enteredDescription != null" class="col-start-1 col-span-12">
              <button @click="addChecKBox = true"><font-awesome-icon icon="fa-solid fa-plus"
                  class="object-contain h-4 w-4 place-self-center mx-1" /></button>
              <input type="text" v-on:keyup.enter="editeNote()" placeholder="Item da lista" @focus="addChecKBox = true"
                class="dark:bg-zinc-900">
            </div>

          </div>
        </div>
        <div v-else>
          <input :value="indexNote.title" @input="event => indexNote.title = event.target.value" placeholder="Título"
            class="text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
          <textarea :value="indexNote.description" @input="event => indexNote.description = event.target.value" rows="35"
            class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1"
            placeholder="Nota" required style=""></textarea>
        </div>
      </div>

      <!-- Add note when screen width is smallet than 500px -->
      <div v-if="buttonEnterNote" class="p-[2rem]">
        <div class="grid grid-cols-3">
          <button @click="addTitleDescription(index), toggleModal = false, descriptionList = false"
            class="place-self-start"><font-awesome-icon icon="fa-solid fa-arrow-left" /></button>
          <button v-if="!descriptionList" @click="descriptionList = true" class="place-self-center"><font-awesome-icon
              icon="fa-solid fa-list-check" /></button>
          <button v-if="enteredTitle || enteredDescription"
            @click="buttonEnterNote = false, toggleModal = false, enteredTitle = null, enteredDescription = null"
            class="place-self-end"><font-awesome-icon icon="fa-solid fa-trash" style="color: #707070;" />
          </button>
        </div>

        <input type="text" v-model="enteredTitle" placeholder="Título"
          class="text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />

        <div v-if="descriptionList">
          <div v-for="(enteredListDescriptions, index) in enteredListDescription" :key=enteredListDescriptions
            class="grid grid-cols-12 group/item">
            <input type="checkbox" :checked=enteredListDescriptions.checkBox id="checkedBoxItem"
              @change="editeDescriptionItem(index)"
              class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center ">
            <input type="text" :value=enteredListDescriptions.description v-on:keyup.enter="editeDescriptionItem(index)"
              @input="event => newEnteredDescription = event.target.value"
              class="col-start-2 col-span-10 focus:outline-none dark:bg-zinc-900">
            <button @click="deleteDescriptionItem(index)"><font-awesome-icon icon="fa-solid fa-x"
                class="col-end-7 col-span-1 invisible group-hover/item:visible" /></button>
          </div>
          <div class="grid grid-cols-12">
            <input type="checkbox" id="checkbox" v-model="checkedBox"
              class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center">
            <input type="text" v-model="enteredDescription" @blur="addDescriptionList()"
              v-on:keyup.enter="addDescriptionList()" ref="textlist"
              class="col-start-2 col-span-10 focus:outline-none dark:bg-zinc-900">
            <!-- <button><font-awesome-icon icon="fa-solid fa-x" class="col-end-7 col-span-1" /></button> -->
          </div>
          <div v-if="enteredDescription != null" class="col-start-1 col-span-12">
            <button @click="addChecKBox = true"><font-awesome-icon icon="fa-solid fa-plus"
                class="object-contain h-4 w-4 place-self-center mx-1" /></button>
            <input type="text" v-on:keyup.enter="addDescriptionList()" placeholder="Item da lista"
              @focus="addChecKBox = true" class="focus:outline-none dark:bg-zinc-900">
          </div>
        </div>
        <textarea v-else v-model="enteredDescription" rows="35"
          class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 m-2 bg-white border-0 dark:bg-zinc-900"
          placeholder="Nota" required style=""></textarea>
      </div>

      <!-- View Modal Note when screen is large than 500 px  -->
      <div v-if="toggleModal && !buttonEnterNote && !toggleWidht" class="relative z-10" aria-labelledby="modal-title"
        role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              class="relative transform overflow-hidden rounded-lg bg-white- text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white dark:bg-zinc-900 mb-2 px-4 pb-4 pt-5 sm:p-6 sm:pb-4 max-h-screen">
                <div class="">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div class="grid grid-cols-2">
                      <button class="place-self-start"
                        @click="editeNote(), toggleModal = false"><font-awesome-icon
                          icon="fa-solid fa-arrow-left" /></button>
                      <button @click="toggleModal = false, removeNote()" class="place-self-end"><font-awesome-icon
                          icon="fa-solid fa-trash" style="color: #707070;" />
                      </button>
                    </div>
                    <div v-if="Array.isArray(indexNote.description)">
                      <input :value="indexNote.title" @input="event => indexNote.title = event.target.value"
                        placeholder="Título"
                        class="text-2xl font-bold break-words input input-bordere border-0 w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
                      <div v-for="(entered, index) in indexNote.description" :key="entered"
                        class="grid grid-cols-12 group/item">
                        <input type="checkbox" :checked=entered.checkBox
                          @change="indexNote.description[index].checkBox = !indexNote.description[index].checkBox"
                          class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center ">
                        <input type="text" :value=entered.description
                          v-on:keyup.enter="indexNote.description[0].description"
                          @input="event => indexNote.description[index].description = event.target.value"
                          class="col-start-2 col-span-10 focus:outline-none dark:bg-zinc-900">
                        <button @click="editeNote(trash = index)"
                          class="invisible group-hover/item:visible "><font-awesome-icon icon="fa-solid fa-x"
                            class="col-end-7 col-span-1" /></button>
                      </div>

                      <div class="grid grid-cols-12">
                        <div v-if="addChecKBox" class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center ">
                          <input type="checkbox" id="checkbox" v-model="checkedBox"
                            class="object-contain h-4 w-4 place-self-center ">
                        </div>
                        <div v-else>
                          <button @click="addChecKBox = true"><font-awesome-icon icon="fa-solid fa-plus"
                              class="object-contain h-4 w-4 place-self-center mx-1" /></button>
                        </div>
                        <div class="col-start-2 col-span-10">
                          <input type="text" v-on:keyup.enter="editeNote()" placeholder="Item da lista"
                            v-model="enteredDescription" @focus="addChecKBox = true" @blur="editeNote()"
                            class="focus:outline-none dark:bg-zinc-900">
                        </div>
                        <div v-if="enteredDescription != null" class="col-start-1 col-span-12">
                          <button @click="addChecKBox = true"><font-awesome-icon icon="fa-solid fa-plus"
                              class="object-contain h-4 w-4 place-self-center mx-1" /></button>
                          <input type="text" v-on:keyup.enter="editeNote()" placeholder="Item da lista"
                            @focus="addChecKBox = true" class="dark:bg-zinc-900">
                        </div>

                      </div>
                    </div>
                    <div v-else>
                      <input :value="indexNote.title" @input="event => indexNote.title = event.target.value"
                        placeholder="Título"
                        class="text-2xl font-bold break-words input input-bordere w-full rounded-md m-1 focus:outline-none dark:bg-zinc-900" />
                      <textarea :value="indexNote.description"
                        @input="event => indexNote.description = event.target.value" rows="35"
                        class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1"
                        placeholder="Nota" required style=""></textarea>
                    </div>
                    <div class="mt-2">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- See when there is no note -->
    <div v-if="noNote && !toggleModal && toggleWidht" class="grid content-center h-screen w-screen">
      <div class="w-80 h-80 grid content-center justify-self-center justify-items-center">
        <h1 class="font-bold">Crie sua primeira Nota</h1>
        <button @click="buttonEnterNote = true, toggleModal = true, noNote = false"><font-awesome-icon
            icon="fa-solid fa-circle-plus" size="2xl" class="m-2" />
        </button>
      </div>
    </div>

  </section>
</template>

<style scoped></style>
