let level = 1;
let set2 = ["yellow", "green", "red", "blue"];
// ================ random array creation====================
let randomArray = [];
function ArrayCreation(level) {
    for (let k = 0; k < level; k++) {
        randomArray.push(set2[Math.floor(Math.random() * set2.length)]);
    }
    animation();
    console.log(randomArray);
}

let list = ['green', 'red', 'yellow', 'blue']

// ====== animation for random arraycreation ======================
function animation() {
    let t = 1000;
    for (let i = 0; i < randomArray.length; i++) {
        let key = list.indexOf(randomArray[i]);
        let parent = document.getElementById('boxcont')
        let elem = parent.children[key];
        // adding new border ---------
        setTimeout(() => {
            elem.classList.add('pressed');
        }, t);
        // removing new border ---------
        setTimeout(() => {
            elem.classList.remove('pressed');
        }, t + 500);
        t = t + 1000;
    }
}

ArrayCreation(level);



let answerArray = [];

// answer record
function press(currentelem) {
    let colorCode = currentelem.getAttribute('id');
    let key = list.indexOf(colorCode);
    let parent = document.getElementById('boxcont')
    let elem = parent.children[key];

    answerArray.push(colorCode);

    setTimeout(() => {
        elem.classList.add('pressed');
    }, 200);
    setTimeout(() => {
        elem.classList.remove('pressed');
    }, 500);

    console.log(answerArray)
    check(answerArray, randomArray);
    // return check1;
}


function check(ans, question) {
    let i = 0;
    while (i < ans.length) {
        if (ans[i] != question[i]) {
            // console.log("false");
            boxAppear(false);
            return false;
        }

        i++;
    }

    if (i == randomArray.length) {
        boxAppear(true);

    }


}


// ===========Box Creation==================
let ParentNod = document.getElementById('body');

function boxAppear(check) {
    let newDivTag = document.createElement('div')
    let newH2 = document.createElement('h2')
    let button = document.createElement('button')

    button.setAttribute("id", "boxAppearButton");

    newDivTag.setAttribute("id", "alert");

    if (check == true) {
        newH2.innerHTML = "Level Passed";
        ParentNod.classList.add('bodyg')
        console.log("jeet  gye")
        button.innerText = "Next Level";

    }
    else {
        newH2.innerHTML = `" You Are wrong" [ ${randomArray} ] `;
        ParentNod.classList.add('bodyr')
        console.log("haar gye")
        button.innerText = "retry";
    }
    console.log(level);

    newDivTag.appendChild(newH2)
    newDivTag.appendChild(button)
    ParentNod.appendChild(newDivTag);
    console.log(document.getElementById('boxAppearButton'))
    document.getElementById('boxAppearButton').addEventListener("click", levelgenrator);
}

function levelgenrator() {

    let i = document.getElementById('boxAppearButton').innerText;
    console.log(i);

    if (i == "retry") {
        // console.log("Retry mtlb relode");
        window.location.reload();
        ParentNod.classList.remove('bodyr')
    }
    else if (i == "Next Level") {
        level++;
        ParentNod.children[0].innerHTML = `Level ${level}`;
        ParentNod.classList.remove('bodyg') //remove green background
        ParentNod.removeChild(ParentNod.lastElementChild);
        randomArray = [];
        answerArray = [];


        ArrayCreation(level);
        console.log("Next level...");
    }
}