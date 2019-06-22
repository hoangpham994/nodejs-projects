const chalk = require('chalk');
const inquirer = require('inquirer');
const random = require('meteor-random');
const cosmic = require('cosmicjs');

var config = {};
config.bucket = {
    slug: '',
    read_key: '',
    write_key: ''
}

const MainMenu = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'mainMenu',
            message: 'Main Menu',
            choices:[
                'New Note',
                'View Notes',
                new inquirer.Saparator(),
                'Exit'
            ]
        }
    ).then(answers => {
        if(answers.MainMenu === 'New Note')
        {
            NewNote();
        }
        else if(answers.MainMenu === 'View Notes')
        {
            ViewNotes();
        }
        else{
            process.exit();
        }
    })
};

MainMenu();

const NewNote = () => {
    var question = {
        type : 'input',
        name : 'note_text',
        message : 'Note'
    }
    
    inquirer.prompt(question),then((answers)=>{
        var params = {
            write_key: config.bucket.write_key,
            type_slug: 'notes',
            slug: Random.id().toLowerCase(),
            tilte: answers.note_text,
            content: ''
        }
        if(answers.note_text === '')
        {
            console.log(chalk.red('You cannot add an empty note'));
            MainMenu();
            return;
        }
        Cosmic.addObject(config, params, (error, response)=>{
            if(response.object){
                console.log(chalk.green('\u2713'+'Success'));
            }
            if(error)
            {
                console.log(error)
            }
            MainMenu();
        })
    }
    );
}

