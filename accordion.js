const accItemHeaders = document.querySelectorAll(".accordionItemHeader");

accItemHeaders.forEach(accItemHeader =>{
    accItemHeader.addEventListener("click", event =>{

        // For one item open start
        const currentlyActiveAccItemHeader = document.querySelector(".accordionItemHeader.active");
        if(currentlyActiveAccItemHeader && currentlyActiveAccItemHeader !== accItemHeader){
            currentlyActiveAccItemHeader.classList.toggle("active");
            currentlyActiveAccItemHeader.nextElementSibling.style.maxHeight = 0;
        }
        // For one item open end

        accItemHeader.classList.toggle("active");

        const accItemBody = accItemHeader.nextElementSibling;
        if(accItemHeader.classList.contains("active")){
            accItemBody.style.maxHeight = accItemBody.scrollHeight + "px";
        }
        else{
            accItemBody.style.maxHeight = 0;
        }

    });
});