const fs=require("fs");
const chalk=require("chalk");

const addNote=(title,body)=>{
const notes=loadnotes();
const isTitle=notes.find((note)=>{
     return note.title===title;
})
if (!isTitle) {
    notes.push({
        title: title,
        body: body
    });
    savenotes(notes);
    console.log("noted");
} else {
    console.log("title is already taken");
}

}
const removeNote=(title)=>{
    const notes=loadnotes();
    const newarray=notes.filter((note)=>{
           return note.title!=title;
    })
    if(newarray.length===notes.length){
        console.log(chalk.red("no title matches to remove"));
    }
    else{
    savenotes(newarray);
    console.log(chalk.green("the note is removed"));
    }
}
const listNotes=()=>{
    console.log(chalk.blue("your notes"))
    const notes=loadnotes();
    notes.forEach((note)=>{
        console.lo(gnote.title);
    })
}
const readNote=(title)=>{
    const notes=loadnotes();
    const note=notes.find((note)=>{
         return note.title===title;
    })
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red("note not found"));
    }
}

function savenotes  (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
  

const loadnotes=()=>{
try{
    if (fs.existsSync("notes.json")) {
        const databuffer = fs.readFileSync("notes.json");
        const jsondata = databuffer.toString();
        const data = JSON.parse(jsondata);
        return data;
      } else {
        return [];
      }
  
}catch(err){
    return []; 
}
}

module.exports={

    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}







// // function loadnotes(){
//     try{
//         const datbufffer=fs.readFileSync("notes.json");
//         const jsondata =databuffer.toString();
//         const data=JSON.parse(jsondata);
//         return data;
//     }catch(err){
//         return []; 
//     }
//     }
    