console.log("Hello im Rokey")




let boxes = document.getElementsByClassName("box")
console.log(boxes)


function getRendomeColor() {
    let v1 = Math.ceil(0 + Math.random()* 255);
    let v2 = Math.ceil(0 + Math.random()* 255);
    let v3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${v1}, ${v2}, ${v3})`
}




Array.from(boxes).forEach(e=> {
    console.log(e)
    e.style.backgroundColor = getRendomeColor()
    e.style.color = getRendomeColor()
   e.style.border = `5px solid ${getRendomeColor()}`
})




