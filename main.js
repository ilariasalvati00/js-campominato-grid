const container = document.getElementById("container");
const play = document.getElementById("play"); 


play.addEventListener("click", function(){
    const difficolta = document.getElementById("difficolta").value;
    createGrid(difficolta);
});

function createGrid(x){
    const boxes = document.querySelectorAll(".box");
    for (let i=0; i< boxes.length; i++){
        boxes[i].remove();
    }

    let numero = 0;
    if (x == "Hard"){
        numero = 100;
    }
    else if (x == "Medium"){
        numero = 81;
    }
    else{
        numero = 49;
    }
    for(let i=1; i<=numero;i++){
        let box = document.createElement("div");
        box.classList.add("box");
        if (x == "Hard"){
            box.classList.add("box-10");
        }
        else if (x == "Medium"){
            box.classList.add("box-9");
        }
        else{
            box.classList.add("box-7");
        }
        box.addEventListener("click", function(){
            box.classList.add("colored");
            console.log(`Hai cliccato la cella ${i}`);
        })
        box.innerHTML=`${i}`;
        container.appendChild(box);
    }
}
