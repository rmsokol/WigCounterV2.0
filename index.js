let dateEl = new Date()
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function summary() {
    let countStr = "You have seen" + count + "today" 
    saveEl.textContent = countStr
    countEl.textContent = 0
    count = 0
}
