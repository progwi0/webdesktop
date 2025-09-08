let open = 0
let minus = 0
let time = new Date()

function promptinal(){
    let promptinal = prompt("Welcome to Promptinal!")
    if(promptinal == "about"){
        promptinal = prompt("Promptinal 1.0beta, webdesktop 1.0beta")
    } else if(promptinal == "exit"){
        console.log("Promptinal disabled.")
    }
}

function menu(){
    if(open == 0){
        document.getElementById("menu").style.animation = "fadein ease forwards 0.5s"
        open = 1
    } else {
        document.getElementById("menu").style.animation = "fadeout ease forwards 0.5s"
        open = 0
    }
}

function min(){
    if(minus == 0){
        document.getElementById("application").style.height = "4.3%"
        minus = 1
    } else {
        document.getElementById("application").style.height = "94.3vh"
        minus = 0
    }
}

function timeUpdate(){
    let time = new Date()
    document.getElementById("date").textContent =
    time.getHours() + ":" + String(time.getMinutes()).padStart(2, '0') + ", " + time.getDate() + "/" + String(time.getMonth() + 1).padStart(2, '0') + "/" + time.getFullYear();
}

setInterval(timeUpdate, 1)

menu()
min()