const menuItems = document.querySelectorAll('.menu-item');
const backgroundItems = document.querySelectorAll('.background-item');

const allClassNames = ["about-me", "projects", "education", "experience", "contact"]

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const currentClassName = item.classList[1]; // Get the second class name
        allClassNames.forEach(className =>{
            // Reduce the opacities of element that is not the same as the hover one 
            const correspondingBackgroundItem = document.querySelector(`.background-item.${className}`);
            if(className != currentClassName){
                correspondingBackgroundItem.classList.remove('move-nothing')
                correspondingBackgroundItem.classList.add('reduce-opacity-and-move-left');
            }
            else{
                correspondingBackgroundItem.classList.remove('move-nothing')
                correspondingBackgroundItem.classList.add('move-right')
            }

        })

    });

    item.addEventListener('mouseout', () => {
        const currentClassName = item.classList[1]; // Get the second class name
        allClassNames.forEach(className =>{
            const correspondingBackgroundItem = document.querySelector(`.background-item.${className}`);
            if(className != currentClassName){
                correspondingBackgroundItem.classList.add('move-nothing')
                correspondingBackgroundItem.classList.remove('reduce-opacity-and-move-left');
            }
            else{
                correspondingBackgroundItem.classList.remove('move-right')
                correspondingBackgroundItem.classList.add('move-nothing')
            }

        })
    });
});

const menu = document.getElementById("menu");
const currentTransformationName = "";
Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) =>{
    item.addEventListener('mouseover', () =>{
        menu.dataset.activeIndex = index;
    })
})
