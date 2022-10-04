const form = document.querySelector('form')
.addEventListener('submit', handleSubmit)

let goal = 25

let entries =[]
 document.getElementById('total').innerText

const ul = document.querySelector('ul');


function handleSubmit(e){
    e.preventDefault();
    const entry = Number(document.getElementById('entry').value)
    if(!entry) return;
    entries.push(entry)
    document.querySelector('form').reset();
    addNewEntries(entry)
    total()
    calcAverage()
    weekHigh()
    calcGoal()
}

function calcAverage(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

function addNewEntries(newEntry){
    ul.removeChild(ul.firstElementChild)
    const listItem = document.createElement('li')
    const listValue = document.createTextNode(newEntry.toFixed(1))
    listItem.appendChild(listValue)
    ul.appendChild(listItem)
}

function weekHigh(){
    const high = Math.max(...entries)
    document.getElementById('high').innerText = high
}

function reducer(total, currentValue){
    return total + currentValue;
}

function total(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}

function calcGoal(){
    const totalValue = entries.reduce(reducer).toFixed(1);
    const complete = totalValue / (goal / 100)
    const progressCircle = document.querySelector("#progressCircle");
    if(complete > 100) complete === 100;
    progressCircle.style.background = `conic-gradient(rgb(139, 249, 43) ${complete}%, gray ${complete}% 100%)`
}