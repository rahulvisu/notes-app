const yargs=require("yargs");
const validator=require("validator");
const notes=require("./notes");
const chalk=require("chalk");







yargs.command({
    command:"add",
    describe:"a note is addeed",
    builder:{
        title:{
            describe:'add title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }

})
yargs.command({
    command:"remove",
    describe:" note is removed",
    builder:{
        title:{
           descibe:"removing the title",
           demandOption:true,
           type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title,argv.body);
    }

})
yargs.command({
    command:"list",
    describe:"listtin your notes",
     
    handler(argv){
        notes.listNotes();
    }

})
yargs.command({
    command:"read",
    describe:"read the list",
    builder:{
        title:{
            descibe:"removing the title",
            demandOption:true,
            type:'string' 
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }

})







yargs.parse();
