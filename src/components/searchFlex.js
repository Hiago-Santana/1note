

// import Index from "./index.js";
// import Document from "./document.js";
// import WorkerIndex from "./worker/index.js";



// const index = new Index(options);
// const document = new Document(options);
// const worker = new WorkerIndex(options);

var index = require("flexsearch").create({/* options */});

index.add()


const searchNote = []

export async function loadSearchNote () {
    searchNote.value = await readAllNote();
    return searchNote;
}

