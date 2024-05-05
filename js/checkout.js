let buttons = [...document.getElementsByTagName("button")]
let count = 3
buttons.forEach(x => {
    if(x=>x.textContent == "-" || x.textContent == "+"){
        x.addEventListener("click", ()=>{
            let c = Number(x.parentElement.children[3].textContent )
            if(x.textContent=="-" && c>0){
                x.parentElement.children[3].textContent = `${ c- 1}`
                count -=1
            }
            if(x.textContent=="+" && c<9){
                x.parentElement.children[3].textContent = `${ c + 1}`
                count +=1
            }
            x.parentElement.children[5].textContent = `$${ c + 1}.00`
            document.getElementById("total").textContent = `Total: $${count}.00`
        })
    }
});