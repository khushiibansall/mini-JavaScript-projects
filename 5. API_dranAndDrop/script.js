const image= document.getElementById("img1")
const boxes= document.getElementsByClassName("box")

image.addEventListener('dragstart', dragStart)
image.addEventListener('dragend', dragEnd)

for(const box of boxes){
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', drop)
}

function dragStart(){
    setTimeout(()=>(this.className='invisible'),0)
    
}

function dragEnd(){
    this.className='image'
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.preventDefault()
}

function dragLeave(e){
    e.preventDefault()
}

function drop(){
    this.className='box'
    this.append(image)
}
