// let highestVote = Math.max(...votes)
let currentsong;
let nextsong;

let songData = [
    {id: 0, name: "song1", votes: 0, timesPlayed: 0},
    {id: 1, name: "song2", votes: 0, timesPlayed: 0},
    {id: 2, name: "song3", votes: 0, timesPlayed: 0},
    {id: 3, name: "song4", votes: 0, timesPlayed: 0},
    {id: 4, name: "song5", votes: 0, timesPlayed: 0}

];

let audiofiles = [];
audiofiles[0] = new Audio('/assets/mp3/Higher-and-Higher.mp3');
audiofiles[1] = new Audio('/assets/mp3/Power-in-the-Blood.mp3');
audiofiles[2] = new Audio('/assets/mp3/Hey-Ricky.mp3');
audiofiles[3] = new Audio('/assets/mp3/Beats-Highs.mp3');
audiofiles[4] = new Audio('/assets/mp3/A-Narrow-Path.mp3');

function startPlaying() {
    if (!currentsong) {
        audiofiles[0].play()
    }
    currentsong = audiofiles[0];
    startcheck = true;
}

setInterval(check, 100);

function check() {
    if (currentsong.duration > 0 && !currentsong.paused) {
        console.log('yes')
    } else {
        console.log('not')
        playNext()
    }
}


function addVote(id) {
    let songId = id.rowIndex;
    songData[songId].votes++
    // console.log(songData)
    let highscore = findHighScore()
    nextsong = audiofiles[highscore.id]
}

function playSong(id) {
    audiofiles.forEach(el => el.pause())
    audiofiles[id].play();
}

function playNext() {
    currentsong = audiofiles[id];
    nextsong.play();
}

function findHighScore() {
    let highScoreSoFar = 0;
    let result;
    for (let i = 0; i < songData.length; i++) {
        if (songData[i].votes > highScoreSoFar) {
            result = songData[i];
            highScoreSoFar = songData[i].votes;
        }
    }
    return result;
}


document.querySelectorAll('audio').forEach(function (el) {
    el.addEventListener("ended", function () {
        this.parentElement.querySelector('.control').className = 'control icon-play';
    }, true);
})

//
// if (currentsong) {
//     console.log(currentsong);
// //     currentsong.addEventListener("ended", function () {
//     currentsong.addEventListener("ended", function () {
//         console.log("mannn");
//         // songs.forEach((song) => {
//         //     console.log(song)
//         //     if (song === highestVote) {
//         //         // console.log(song);
//         //     }
//         // });
//     })
// }


// console.log(votes.indexOf(highestVote)); // 0

