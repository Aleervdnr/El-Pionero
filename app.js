const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".ul__nav") 

    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active")
    })
}

navSlide()