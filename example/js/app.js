const tabsContent = document.querySelectorAll(".tabcontent")
const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")

const hideTabContent = () =>{
    tabsContent.forEach((item) =>{
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}



const showContent = (i = 0) => {
  tabsContent[i].style.display = "block"
  tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showContent()

tabsParent.addEventListener("click", (e) => {
    const target = e.target


    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) =>{
            if(item === target){
                // console.log(i);
                hideTabContent()
                showContent(i)
            }
        })
    }
})



const modal = document.querySelector(".modal")
const modalOpenBtn = document.querySelector(".btn_white")
const modalCloseBtn = document.querySelector(".modal__close")

const handleOpenModal = () =>{
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}


const handCloseModal = () =>{
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
} 

modalOpenBtn.addEventListener("click", handleOpenModal)
modalCloseBtn.addEventListener("click", handCloseModal)


modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        handCloseModal()
    }
})

const sliderImg = document.querySelectorAll(".offer__slide");
const sliderPrev = document.querySelector(".offer__slider-prev");
const sliderNext = document.querySelector(".offer__slider-next");
const currentCounter = document.querySelector("#current");
let slideIndex = 0;

const showSlide = function (){
    sliderImg.forEach((item)=>{
        item.style.display = 'none'
    } )
    sliderImg[slideIndex].style.display = 'block'
    currentCounter.textContent = ("0" + (slideIndex + 1)).slice(-2);

}
showSlide()
let changeNext = ()=>{
    showSlide()
    slideIndex++
    if (slideIndex >= sliderImg.length) {
        slideIndex = 0;
    }
}
let intervalChange;
intervalChange = setInterval(changeNext, 1000);
const stopInterval = function (){
    clearInterval(intervalChange);
    setTimeout(() => {
        intervalChange = setInterval(changeNext, 1000);
    }, 5000);
}
sliderNext.addEventListener('click', () => {
    showSlide()
    slideIndex++
    if (slideIndex >= sliderImg.length) {
        slideIndex = 3;
    }
    stopInterval()
});
sliderPrev.addEventListener('click',()=>{
    showSlide()
    slideIndex--
    if (slideIndex < 0) {
        slideIndex = 0;
    }
    stopInterval()
})


