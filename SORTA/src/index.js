
const add_btn = document.querySelector(".add__btn")

const clear_btn = document.querySelector(".clear__btn")

const input = document.querySelector("input")

const list_box = document.querySelector(".list")

add_btn.onclick = () =>{
    if(!input.value) return

    const text = input.value.trim()

    CreateItem(text)

    input.value = ""

    input.focus()

    Sort()
}

clear_btn.onclick = () =>{
    list_box.innerHTML = "<small>Items will appear here....</small>"
}

function Sort(){

    let arr = Array.from(list_box.children).filter(p =>{
        return p.matches("p")
    }).map(p =>{
        return p.textContent.trim()
    }).sort()


    list_box.innerHTML = ""

    arr.forEach((text , i) => {
        CreateItem(text , i)
    });
    
}

function CreateItem(text , i){
    let item = document.createElement("p")

    
     if(i != undefined) setTimeout(() => {
        item.classList.add('ani')
     }, i * 50)

    item.classList.add('item')

    item.textContent = text

    list_box.append(item)
}