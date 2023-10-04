<script setup>

// require("dotenvsafe").config();
//const jwt = require('jsonwebtoken');

// import {dontenvsafe} from 'dotenvsafe'
// import {jsonwebtoken} from 'jsonwebtoken'


// require(dontenvsafe).config();
// const jwt = require(jsonwebtoken);

import { onMounted, ref } from 'vue'
import { addNote, readAllNote, deleteNote, setNote } from './components/indexeddb'
import { getapi, createAcount, logInCount, insertNote, deleteNoteClound, setNoteClound } from './components/worker'
import Index from 'flexsearch';
import { faGofore } from '@fortawesome/free-brands-svg-icons';

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
const logIn = ref(false);
const buttonSignUp = ref(false);
const cAName = ref(null);
const cAEmail = ref(null);
const cAPassword = ref(null);
const mensageAlerte = ref(null);
const logEmail = ref('hiago@hotmail.com');
const logPassword = ref("123456");
const userLoged = ref(false);
const token = ref(null);
const allNoteClound = ref(null);
let resultCloundLogin = null;
let resultCloundInsertNote = null;
const viewNoteFor = ref(null);

const noteVisible = (entered) => {
  viewNoteFor.value = entered;
  console.log("viewNoteFor",viewNoteFor.value)

}


const sigUp = () => {

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValidate = re.test(cAEmail.value);
  //const sizePassword = cAPassword.value.length;

  //  console.log("emailValidate",emailValidate)
  //  console.log("cAEmail",cAEmail.value)
  //  console.log("cAPassword",cAPassword.value)
  //  console.log("cAName",cAName.value)

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
    //console.log("userLor Result", resultCloundLogin)
    //console.log("token",token.value)
  }
}


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
  console.log("id Note View", id)
  const size = allNote.value.length;
  for (let i = 0; i < size; i++) {
    const idArray = allNote.value[i].id;
    if (idArray === id) {
      indexNote.value = null;
      const noteId = allNote.value[i].noteId
      const usersId = allNote.value[i].usersId
      const lastUpdate = allNote.value[i].lastUpdate
      const deleted = allNote.value[i].deleted



      console.log("noteID View Note", noteId)
      const title = allNote.value[i].title;
      console.log("title View Note", title)
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
      indexNote.value = { id: id, noteId: noteId, usersId: usersId, title: title, description: descriptionValue.value, lastUpdate: lastUpdate, deleted: deleted };
      indexNoteCopy.value = { id: id, noteId: noteId, usersId: usersId, title: title, description: descriptionValue.value, lastUpdate: lastUpdate, deleted: deleted };
      toggleModal.value = true;
    }
  }
  enteredDescription.value = null
}

// async function reloadNote() {
//   //Get data from database and reload notes  
//   allNote.value = await readAllNote()
//   //console.log("allNote", allNote.value)
//   const size = allNote.value.length;

//   for (let i = 0; i < size; i++) {
//     const title = allNote.value[i].title;
//     const description = { 'value': null }
//     description.value = allNote.value[i].description;
//     const jsonTeste = isJson(description.value)
//     const id = allNote.value[i].id;


//     if (jsonTeste) {
//       description.value = JSON.parse(description.value)
//       allNote.value[i].description = description.value
//     }
//     index.add(id, title);
//     index.append(id, description)
//   }

//   if (size == 0) {
//     noNote.value = true;
//   }
// }

async function reloadNote() {
  //Get data from database and reload notes  
  //console.log("resultCloundLogin reloadNote", resultCloundLogin)
  allNote.value = await readAllNote();
  allNoteClound.value = resultCloundLogin.userAuthentication.note;
  console.log("allNoteClound reloadNote", allNoteClound.value)

  let noteIdClound;
  let usersIdClound;
  let titleClound;
  let descriptionClound;
  let lastUpdateclound;
  let deletedClound;

  let noteIdLocal;
  let usersIdLocal;
  let titleLocal;
  let descriptionLocal;
  let lastUpdateLocal;
  let deletedLocal;

  let noteNotInsertdClound;

  //sync
  const sizeLocal = allNote.value.length;
  const sizeClound = allNoteClound.value.results.length;
  for (let i = 0; i < sizeClound; i++) {
    noteIdClound = allNoteClound.value.results[i].noteId;
    usersIdClound = allNoteClound.value.results[i].usersId;
    titleClound = allNoteClound.value.results[i].title;
    descriptionClound = allNoteClound.value.results[i].description;
    lastUpdateclound = allNoteClound.value.results[i].lastUpdate
    deletedClound = allNoteClound.value.results[i].deleted;

    //console.log("lastUpdateclound", lastUpdateclound)
    if (sizeClound > 0 && sizeLocal > 0) {
      for (let i = 0; i < sizeLocal; i++) {

        try {
          lastUpdateLocal = allNote.value.find(Element => Element.noteId == noteIdClound).lastUpdate

          if (lastUpdateclound > lastUpdateLocal) {
            noteIdLocal = allNote.value.find(Element => Element.noteId == noteIdClound).id
            await setNote(noteIdLocal, noteIdClound, usersIdClound, titleClound, descriptionClound, lastUpdateclound, deletedClound)
            allNote.value = await readAllNote();
          }
          if (lastUpdateclound < lastUpdateLocal) {
            //await insertNote(title, description, token, id)
            //avaliar se é necessário criar ele aqui
          }
        } catch (error) {

          await addNote(noteIdClound, usersIdClound, titleClound, descriptionClound, lastUpdateclound, deletedClound)
          allNote.value = await readAllNote();
          break

        }

        //const lastUpdateLocal = allNote.value.find(Element => Element.noteId == noteIdClound).lastUpdate

        //console.log("lastUpdateLocal", lastUpdateLocal)

      }
    } else if (sizeClound > 0 && sizeLocal == 0) {
      for (let i = 0; i < sizeClound; i++) {
        noteIdClound = allNoteClound.value.results[i].noteId;
        usersIdClound = allNoteClound.value.results[i].usersId;
        titleClound = allNoteClound.value.results[i].title;
        descriptionClound = allNoteClound.value.results[i].description;
        lastUpdateclound = allNoteClound.value.results[i].lastUpdate
        deletedClound = allNoteClound.value.results[i].deleted;
        await addNote(noteIdClound, usersIdClound, titleClound, descriptionClound, lastUpdateclound, deletedClound)
      }

      allNote.value = await readAllNote();
      sizeLocal = allNote.value.length;
      break
    }

  }


  //sync invertido

  for (let i = 0; i < sizeLocal; i++) {
    try {
      if (i == 0) {

      }
      noteNotInsertdClound = allNote.value.find(Element => Element.noteId == null)
      if (noteNotInsertdClound != undefined) {

        const idNoteLocal = noteNotInsertdClound.id
        const title = noteNotInsertdClound.title
        const description = noteNotInsertdClound.description
        const notInsered = await insertNote(title, description, token.value, resultCloundLogin.userAuthentication.idUser)

        const idNotInserted = notInsered.res.lastNote.results[0].noteId
        const lastUpdateInsertedNote = notInsered.res.lastNote.results[0].lastUpdate
        const deletedInsertNote = notInsered.res.lastNote.results[0].deleted
        console.log("idNotInserted", idNotInserted)
        setNote(idNoteLocal, idNotInserted, resultCloundLogin.userAuthentication.idUser, title, description, lastUpdateInsertedNote, deletedInsertNote)

        allNote.value = await readAllNote();
      } else {

        noteIdLocal = allNote.value[i].noteId;
        lastUpdateLocal = allNote.value[i].lastUpdate;
        lastUpdateclound = allNoteClound.value.results.find(Element => Element.noteId == noteIdLocal).lastUpdate

        if (lastUpdateLocal > lastUpdateclound) {

          const idNoteLocal = allNote.value[i].id;
          const title = allNote.value[i].title;
          const description = allNote.value[i].description;
          const deleted = allNote.value[i].deleted;
          const updateNoteClound = await setNoteClound(idNoteLocal, noteIdLocal, resultCloundLogin.userAuthentication.idUser, title, description, deleted, token.value)

          const lastUpdateSetClound = updateNoteClound.res.lastNote.results[0].lastUpdate
          const deletedSetClound = updateNoteClound.res.lastNote.results[0].deleted
          await setNote(idNoteLocal, noteIdLocal, resultCloundLogin.userAuthentication.idUser, title, description, lastUpdateSetClound, deletedSetClound);
          allNote.value = await readAllNote();

        }

        //break
      }
    } catch (error) { }
  }

  // for (let i = 0; i < sizeLocal; i++) {
  //   noteIdLocal = allNote.value[i].noteId;
  //   usersIdLocal = allNote.value[i].usersId;
  //   titleLocal = allNote.value[i].title;
  //   descriptionLocal = allNote.value[i].description;
  //   lastUpdateLocal = allNote.value[i].lastUpdate
  //   deletedLocal = allNote.value[i].deleted;




  //   //console.log("lastUpdateclound", lastUpdateclound)
  //   for (let i = 0; i < sizeClound; i++) {

  //     try {
  //       lastUpdateclound = allNoteClound.value.find(Element => Element.noteId == noteIdLocal).lastUpdate

  //       if (lastUpdateclound > lastUpdateLocal) {
  //         noteIdLocal = allNote.value.find(Element => Element.noteId == noteIdClound).id
  //         await setNote(noteIdLocal, noteIdClound, usersIdClound, titleClound, descriptionClound, lastUpdateclound, deletedClound)
  //         allNote.value = await readAllNote();
  //       }
  //       if (lastUpdateclound < lastUpdateLocal) {
  //         //await insertNote(title, description, token, id)
  //         //avaliar se é necessário criar ele aqui
  //       }
  //     } catch (error) {

  //       //await addNote(noteIdClound, usersIdClound, titleClound, descriptionClound, lastUpdateclound, deletedClound)
  //       const noteInsert = await insertNote(titleLocal, descriptionLocal, token.value, usersIdLocal)
  //       const idNoteCloundInsert = noteInsert.res.lastNote.results[0].noteId
  //       const lastUpdateCloundInsert = noteInsert.res.lastNote.results[0].lastUpdate
  //       await setNote(noteIdLocal, idNoteCloundInsert, usersIdLocal, titleLocal, descriptionLocal, lastUpdateCloundInsert, deletedLocal)
  //       allNote.value = await readAllNote();
  //       break

  //     }

  //     //const lastUpdateLocal = allNote.value.find(Element => Element.noteId == noteIdClound).lastUpdate

  //     //console.log("lastUpdateLocal", lastUpdateLocal)

  //   }
  // }

  for(let i = 0; i < sizeLocal; i++){
    if(allNote.value[i].deleted == null){
      const idt = allNote.value[i].id;
      const noteIdt = allNote.value[i].noteId;
      const userIdt = allNote.value[i].userId;
      const titlet = allNote.value[i].title;
      const descriptiont = allNote.value[i].description;
      const lastUpdatet = allNote.value[i].lastUpdate;
      const deletedt = allNote.value[i].deleted;

      let allNoteTemporary;
      allNoteTemporary.push({ id: id, title: title, description: description })
    }
  }


  for (let i = 0; i < sizeLocal; i++) {
    const title = allNote.value[i].title;
    let description = null;
    description = allNote.value[i].description;
    const jsonTeste = isJson(description)
    const id = allNote.value[i].id;


    if (jsonTeste) {
      description = JSON.parse(description)
      allNote.value[i].description = description
    }
    index.add(id, title);
    index.append(id, description)
  }

  if (sizeLocal == 0) {
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

// async function addTitleDescription(index) {
//   //Add title and description to database
//   const title = enteredTitle.value;
//   const description = { 'value': null };

//   if (descriptionList.value == true) {
//     if (enteredDescription.value != null && enteredDescription.value != "") {
//       console.log("enteredListDescription.value", enteredListDescription.value)
//       enteredListDescription.value.push({ checkBox: checkedBox.value, description: enteredDescription.value });
//     }
//     description.value = JSON.stringify(enteredListDescription.value)
//   } else {
//     description.value = enteredDescription.value;
//   }

//   if (title != null || description.value != null) {
//     await insertNote(title, description.value, token.value, resultCloundLogin.userAuthentication.idUser)
//     //await addNote(title, description.value);
//     const note = await readAllNote();
//     allNote.value = note;
//     enteredTitle.value = null;
//     enteredDescription.value = null;
//     toggleTitle.value = false;
//     noNote.value = false;
//     reloadNote();
//   } else {
//     if (allNote.value == "") {
//       noNote.value = true
//     }
//   }
//   buttonEnterNote.value = false;
//   enteredListDescription.value = []

// }

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
    try {
      resultCloundInsertNote = await insertNote(title, description.value, token.value, resultCloundLogin.userAuthentication.idUser)
      console.log("resultCloundInsetNote", resultCloundInsertNote.res.noteinsert)
      if (resultCloundInsertNote.res.noteinsert === true) {
        const noteId = resultCloundInsertNote.res.lastNote.results[0].noteId;
        const usersId = resultCloundInsertNote.res.lastNote.results[0].usersId;
        const title = resultCloundInsertNote.res.lastNote.results[0].title;
        const description = resultCloundInsertNote.res.lastNote.results[0].description;
        const lastUpdate = resultCloundInsertNote.res.lastNote.results[0].lastUpdate;
        const deleted = resultCloundInsertNote.res.lastNote.results[0].deleted;
        addNote(noteId, usersId, title, description, lastUpdate, deleted);
        console.log("addNote indexedDB");
        //return result;
      }
    } catch (error) {

      const noteId = null;
      const usersId = resultCloundLogin.userAuthentication.idUser;
      //const title = titenteredTitle.valuele;
      //const description = description.value;
      const dateNow = new Date();
      const lastUpdate = formatDate(dateNow, "yyyy-mmm-dd hh:mm:ss");
      const deleted = null;

      addNote(noteId, usersId, title, description.value, lastUpdate, deleted);
    }

    //await addNote(title, description.value);
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

function formatDate(date, format) {
  const map = {
    mmm: ("00" + (date.getMonth() + 1)).slice(-2),
    dd: ("00" + date.getDate()).slice(-2),
    //yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
    hh: date.getUTCHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds()
  }

  return format.replace(/mmm|dd|yyyy|hh|mm|ss/gi, matched => map[matched])
}

// async function removeNote() {
//   //Delete note
//   const id = indexNote.value.id;
//   const noteId = indexNote.value.noteId
//   const usersId = indexNote.value.usersId
//   const title = indexNote.value.title
//   const description = indexNote.value.description
//   const lastUpdate = indexNote.value.lastUpdate
//   const tokenUser = token.value

//   console.log("noteId removeNote", noteId)
//   await deleteNoteClound(id, noteId, usersId, title, description, lastUpdate, tokenUser)
//   // deleteNote(id);
//   index.remove(id);
//   await reloadNote();
//   valueSearchCopy.value = null;
//   searchNote();
//   toggleModal.value = false;
// }

async function removeNote() {
  //Delete note
  const id = indexNote.value.id;
  const noteId = indexNote.value.noteId
  const usersId = indexNote.value.usersId
  const title = indexNote.value.title
  const description = indexNote.value.description
  const lastUpdate = indexNote.value.lastUpdate
  const tokenUser = token.value

  console.log("noteId removeNote", noteId)
  await deleteNoteClound(id, noteId, usersId, title, description, lastUpdate, tokenUser)
  // deleteNote(id);
  index.remove(id);
  await reloadNote();
  valueSearchCopy.value = null;
  searchNote();
  toggleModal.value = false;
}

// const editeNote = (trash) => {
//   //Edite note
//   toggleModal.value = false;
//   console.log("trash", trash)
//   if (trash != null) {
//     console.log("trash", trash)
//     console.log("indexNote.value editNote 1", indexNote.value)
//     indexNote.value.description.splice(trash, 1)
//     console.log("indexNote.value editNote 2", indexNote.value)
//     toggleModal.value = true;
//   }

//   if (enteredDescription.value != null) {
//     console.log("enteredDescription.value", enteredDescription.value)
//     const checkBox = checkedBox.value;
//     indexNote.value.description.push({ checkBox: checkBox, description: enteredDescription.value });
//     enteredDescription.value = null;
//     toggleModal.value = true;
//   }

//   const noteId = indexNote.value.noteId;
//   const usersId = indexNote.value.usersId;
//   const lastUpdate = indexNote.value.lastUpdate;
//   const deleted = indexNote.value.deleted;
//   const id = indexNote.value.id;
//   const title = indexNote.value.title;
//   const description = { 'value': indexNote.value.description };
//   const jsonTeste = { 'value': isJson(description.value) };
//   console.log("editeNote CheckBox", indexNote.value.description)

//   if (!jsonTeste.value) {
//     description.value = JSON.stringify(description.value)
//   }

//   checkedBox.value = false;
//   setNote(id, noteId, usersId, title, description.value, lastUpdate, deleted);
//   reloadNote();
//   searchNote();
//   enteredDescription.value = null;
// }

async function editeNote(trash, del) {
  //Edite note
  if (del == "deleted") {
    const id = indexNote.value.id;
    const noteId = indexNote.value.noteId
    const usersId = indexNote.value.usersId
    const title = indexNote.value.title
    const description = indexNote.value.description
    const lastUpdate = indexNote.value.lastUpdate
    const tokenUser = token.value
    console.log("description editeNote = Deleted", description)
    console.log("noteId removeNote", noteId)

    try {
      const noteSeted = await setNoteClound(id, noteId, usersId, title, description, del, tokenUser);
      const deleted = noteSeted.res.lastNote.results[0].deleted;
      const update = noteSeted.res.lastNote.results[0].lastUpdate;
      await setNote(id, noteId, usersId, title, description, update, deleted);
    } catch (error) {
      const dateNow = new Date();
      const lastUpdate = formatDate(dateNow, "yyyy-mmm-dd hh:mm:ss");
      await setNote(id, noteId, usersId, title, description, lastUpdate, deleted)

    }



    // deleteNote(id);
    index.remove(id);
    await reloadNote();
    valueSearchCopy.value = null;
    searchNote();
    toggleModal.value = false;
  } else {


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

    const noteId = indexNote.value.noteId;
    const usersId = indexNote.value.usersId;
    const lastUpdate = indexNote.value.lastUpdate;
    const deleted = indexNote.value.deleted;
    const id = indexNote.value.id;
    const title = indexNote.value.title;
    let description = indexNote.value.description;
    const jsonTeste = { 'value': isJson(description) };
    console.log("editeNote CheckBox", indexNote.value.description)
    const tokenUser = token.value
    console.log("description editeNote", description)
    if (!jsonTeste.value) {
      description = JSON.stringify(description)
    }

    checkedBox.value = false;

    try {
      const noteSeted = await setNoteClound(id, noteId, usersId, title, description, del, tokenUser);
      console.log("noteSeted", noteSeted)
      const update = noteSeted.res.lastNote.results[0].lastUpdate;
      await setNote(id, noteId, usersId, title, description, update, deleted);
    } catch (error) {
      const dateNow = new Date();
      const lastUpdate = formatDate(dateNow, "yyyy-mmm-dd hh:mm:ss");
      await setNote(id, noteId, usersId, title, description, lastUpdate, deleted)
    }



    await reloadNote();
    searchNote();
    enteredDescription.value = null;
  }
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
  //reloadNote(),
  window.addEventListener('resize', toggleScreen),
    toggleScreen();
  getapi();
  //callOtherDomain();
});

</script>

<template>
  <section class="h-screen">

    <div v-if="!logIn && !buttonSignUp" class="grid content-end mx-8 h-full">
      <h1 class="text-2xl mb-1 text-blue-500">1 Note</h1>
      <h2 class="mb-10 text-sm">Suas anotações em um único lugar.</h2>
      <button @click="buttonSignUp = 'log'" class="mb-2 bg-blue-500 rounded-md p-1">Log in</button>
      <button @click="buttonSignUp = 'sigUp'" class="mb-40 dark:bg-zinc-900 border-2 border-blue-500 rounded-md p-1">Sign
        up</button>

    </div>
    <div v-if="!logIn && buttonSignUp == 'sigUp'" class="grid content-center mx-8 h-screen">
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
    <div v-if="!logIn && buttonSignUp == 'log'" class="grid content-center mx-8 h-screen">
      <div class="grid grid-cols-1 grid-rows-2 content-center mx-8 h-screen">
        <h1 class="text-2xl text-blue-500 grid content-center">Bem vindo de volta</h1>
        <div class="grid content-center h-full">
          <p class="text-red-600">{{ mensageAlerte }}</p>
          <input type="text" placeholder="email" v-model="logEmail" class="mb-2 bg-inherit focus:outline-none">
          <input type="text" placeholder="senha" v-model="logPassword" class="mb-2 bg-inherit focus:outline-none">
          <button @click="userLog(logEmail, logPassword)" class="mb-2 mt-4 bg-blue-500 rounded-md p-1">Log in</button>
          <p class="grid justify-items-center">or</p>
          <button class="mt-2 bg-inneret rounded-md p-1 border-blue-500">Sign Up</button>
        </div>
      </div>
    </div>


    <div v-if="logIn">
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
                <button v-if="!descriptionList" @click="descriptionList = true"
                  class="place-self-center"><font-awesome-icon icon="fa-solid fa-list-check" /></button>
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
            <div class="hidden">
              <h1 id="1" class="display:true">Visible</h1>
              <h1 id="2" class="hidden">Invisible</h1>
            </div>
            <div
             
              v-for="entered in allNote" :key="entered" @click="viewNote(entered.id), toggleTitle = false" class="">
              <div v-if="entered.deleted == null" class=" container shadow-[0_7px_15px_1px_rgba(0,0,0,0.3)]  p-2 rounded-md mt-2 content-start break-words font-semibold hover:shadow-[0_7px_15px_1px_rgba(0,0,0,0.5)] dark:bg-zinc-900 dark:shadow-none dark:border-2 dark:border-gray-700">
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
            <button @click="toggleModal = false, editeNote(null, 'deleted')" class="place-self-end"><font-awesome-icon
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
                <input type="checkbox" id="checkbox" v-model="checkedBox"
                  class="object-contain h-4 w-4 place-self-center ">
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
            <textarea :value="indexNote.description" @input="event => indexNote.description = event.target.value"
              rows="35"
              class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-zinc-900 m-1 dark:text-gray-300"
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
            class="overflow-auto focus:outline-none w-full px-0 text-sm text-gray-900 m-2 bg-white border-0 dark:bg-zinc-900 dark:text-gray-300"
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
                        <button class="place-self-start" @click="editeNote(), toggleModal = false"><font-awesome-icon
                            icon="fa-solid fa-arrow-left" /></button>
                        <button @click="toggleModal = false, editeNote(null, 'deleted')"
                          class="place-self-end"><font-awesome-icon icon="fa-solid fa-trash" style="color: #707070;" />
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
                          <div v-if="addChecKBox"
                            class="col-start-1 col-span-1 object-contain h-4 w-4 place-self-center ">
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
