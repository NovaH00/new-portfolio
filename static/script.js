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


const aboutMeSection = document.getElementById("about-me"); // No '#' in the id
const childElements = aboutMeSection.children;

Array.from(childElements).forEach(item => {
    aboutMeSection.addEventListener('mouseover', () => {
        item.classList.add('translate-up'); 
    });

    aboutMeSection.addEventListener('mouseout', () => {
        item.classList.add('move-nothing');
        item.classList.remove('translate-up');
    });
});



// Save scroll position in sessionStorage before the page unloads
window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

// Restore the scroll position after the page loads
window.addEventListener('DOMContentLoaded', function() {
    const scrollPos = sessionStorage.getItem('scrollPosition');
    if (scrollPos !== null) {
        window.scrollTo(0, parseInt(scrollPos, 10));
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Calculate the top position of the target section
        const sectionTop = targetSection.getBoundingClientRect().top + window.scrollY;

        // Calculate the offset to center the section in the viewport
        const offset = window.innerHeight / 2 - targetSection.offsetHeight / 2;

        // Scroll smoothly to the target section with the calculated offset
        window.scrollTo({
            top: sectionTop - offset,
            behavior: 'smooth'
        });
    });
});


