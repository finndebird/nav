function scrollToElement(el, offset) {
    const id = el.getAttribute('href')
    const idString = id.replace('#', '')
    const element = document.getElementById(idString);
    let scrollTO = element.offsetTop - offset
    
    if(window.scrollY !== element.offsetTop) {
        window.scrollTo({
            top: scrollTO,
            behavior: 'smooth'
        });
    }
    
}
