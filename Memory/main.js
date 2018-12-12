class Selectors {
    constructor() {
        this.divOverlay = document.querySelectorAll('div.overlay')
        this.img = document.querySelectorAll('div.container2 img')
        this.arrayOfDivOverlay = [...this.divOverlay]
        this.arrayOfImagesSrc = [...this.img]
        this.arrayOfDivOverlay.forEach(div => div.addEventListener('click', showImage))
        this.arrayOfImagesSrc.forEach(img => img.addEventListener('click', showImage))
        this.exampleArray = []
        this.flag = 0;
    }
}
const selectors = new Selectors()


const arrayOfImages = [
    'img/item_1.png',
    'img/item_2.png',
    'img/item_3.png',
    'img/item_4.png',
    'img/item_5.png',
    'img/item_6.png',
    'img/item_7.png',
    'img/item_8.png',
    'img/item_9.png',
    'img/item_10.png',
    'img2/item_1.png ',
    'img2/item_2.png ',
    'img2/item_3.png ',
    'img2/item_4.png ',
    'img2/item_5.png ',
    'img2/item_6.png ',
    'img2/item_7.png ',
    'img2/item_8.png ',
    'img2/item_9.png ',
    'img2/item_10.png ',
]

arrayOfImages.sort(function () {
    return 0.5 - Math.random()

});

for (let i = 0; i < selectors.arrayOfDivOverlay.length; i++) {
    selectors.arrayOfImagesSrc[i].src = arrayOfImages[i]
}


// let fullPath = document.getElementById("img1").src;
// let filename = fullPath.replace(/^.*[\\\/]/, '');
// or, try this, 
// var filename = fullPath.split("/").pop();





function showImage(e) {
    e.target.style.opacity = 0;
    let fullPath = e.target.previousElementSibling.src;
    let filename = fullPath.replace(/^.*[\\\/]/, '');
    selectors.exampleArray.push(e.target.previousElementSibling)
    if (selectors.exampleArray.length === 2) {

        if (selectors.exampleArray[0].src.includes(filename) && selectors.exampleArray[1].src.includes(filename)) {
            // console.log(selectors.exampleArray)
            // console.log(filename)
            // console.log(selectors.exampleArray[0].nextElementSibling)
            // selectors.exampleArray[0].parentNode.remove()
            // selectors.exampleArray[1].parentNode.remove()
            // selectors.exampleArray = [];

        } else {
            selectors.exampleArray[0].nextElementSibling.style.opacity = 1;
            selectors.exampleArray[1].nextElementSibling.style.opacity = 1;
            selectors.exampleArray = [];
        }




    }


    // console.log(selectors.exampleArray)
    // console.log(filename)

}