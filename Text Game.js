/* Make a text based adventure game. Each setting should be a separate "room" 
and based on the commands that you enter to interact with the room should 
output a different prompt recognizing that command. */

/* List of supported commands */

/* Move, Search, Help, Inventory, Attack, Quit */

/* Want to have a constant inventory that can be checked at any times */

/* Whenver you go into a room, you should be prompted with either text or an event (monster)*/

/* Zelda style dungeon, North South East West */

/*        if (currentRoom.North === "Room One") {
            enterRoom(roomOne);
        } else if (currentRoom.North === "Room Two") {
            enterRoom(roomTwo); 
        } */


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var roomOne = {
    "Name": "Room One",
    "entryMessage": "You walked into the room and it stinks.",
    "North": "Room Two"
};

var roomTwo = {
    "Name": "Room Two",
    "entryMessage": "You creep into the next room, noticing a door on the north and west walls.",
    "North": "Room Three",
    "West": "Room Four",
    "South": "Room One"
};

var roomThree = {
    "Name": "Room Three",
    "entryMessage": "The wall trembles as you enter the room, scattering dust through the air. " + 
    "You see a darkened hallway through a door on the north end of the room.",
    "North": "Room Five",
    "South": "Room Two"
};

var roomFour = {
    "Name": "Room Four",
    "entryMessage": "This room reeks of cheese and wine, not your favorite but there are worse smells to be assaulted by. " +
    "You see a door on the west side of the room.",
    "West": "Room Six",
    "East": "Room Two"
};

var roomFive = {
    "Name": "Room Five",
    "entryMessage": "Good job idiot, you ran into a dead end.",
    "South": "Room Three",
};

var roomSix = {
    "Name": "Room Six",
    "entryMessage": "You find a giant treasure and a wormhole. The wormhole takes you back to your own dimension.",
};

var rooms = [ roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix ];
var currentRoom = rooms[0];
var winRoom = rooms[5];

var doomTimer = setTimeout(function() {
    console.log("You failed to stop the Evil King of Evil before he enslaved the world. Hell comes for you.");
    quitGame();
}, 100000);

rl.on('line', function(line) {
    if (line === "quit") {
        console.log("The user requested that we quit.");
        
        quitGame();
    } else if ( line === "north") {
        for (i = 0; i < rooms.length; ++i) {
            if (rooms[i].Name === currentRoom.North) {  
                enterRoom(rooms[i]);
                return;
            } 
        }
     } else if ( line === "south") {
        for (i = 0; i < rooms.length; ++i) {
            if (rooms[i].Name === currentRoom.South) {  
                enterRoom(rooms[i]);
                return;
            } 
        }
     } else if ( line === "east") {
        for (i = 0; i < rooms.length; ++i) {
            if (rooms[i].Name === currentRoom.East) {  
                enterRoom(rooms[i]);
                return;
            } 
        }
     } else if ( line === "west") {
        for (i = 0; i < rooms.length; ++i) {
            if (rooms[i].Name === currentRoom.West) {  
                enterRoom(rooms[i]);
                return;
            } 
        }
    }
});

function enterRoom(room) {
    console.log(room.entryMessage);
    currentRoom = room;
    if (currentRoom === winRoom) {
        console.log("Congratulations, you got out of the stupid thing!");
        quitGame();
    }
}
    
function startGame(){
    enterRoom(currentRoom);
    console.log("Start Game finished.");
}

function quitGame(){
    rl.close();
    clearTimeout(doomTimer);
}
    
startGame();