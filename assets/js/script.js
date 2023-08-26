
const navCategories = document.querySelector('.navbar-list');
const sidebar = document.querySelector('.sidebar');
const showContactButton = document.querySelector('.info_more-btn span');
const showContactIcon = document.querySelector('.info_more-btn ion-icon');
const projectNav = document.querySelector('.filter-list');
const projectsList = document.querySelector('.project-list')
const selectProjectNav = document.querySelector('.select-list');
const selectCategoryBtn = document.querySelector('.filter-select')


navCategories.addEventListener('click', (e) => {
    if (e.target.closest("li")) {
        e.preventDefault();

        const categoriesArr = document.querySelectorAll(".navbar-item button");
        categoriesArr.forEach(category => {
            category.classList.remove('active')
        })

        e.target.classList.add('active');

        const articles = document.querySelectorAll('article');
        articles.forEach(article => {
            article.classList.remove('active')
            if (article.classList.contains(e.target.textContent.toLowerCase())) {
                article.classList.add('active')
            }
        })

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
});

const expandContact = () => {
    sidebar.classList.toggle('active');
    if (showContactButton.innerHTML === 'Show Contacts') {
        showContactButton.innerHTML = 'Hide Contacts'
        showContactIcon.style.transform = 'rotate(180deg)'
    } else {
        showContactButton.innerHTML = 'Show Contacts';
        showContactIcon.style.transform = 'rotate(0deg)'
    }
}


projectNav.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
        e.preventDefault();

        const categoriesArr = document.querySelectorAll('.filter-item button');
        categoriesArr.forEach((category) => {
            category.classList.remove('active');
            if (category.innerHTML === e.target.innerHTML) {
                category.classList.add('active');
            }
        })

        const projectsListElems = document.querySelectorAll('.project-item p');
        projectsListElems.forEach(elem => {
            elem.closest('.project-item').classList.remove('active');
            if (e.target.innerHTML === 'All') {
                elem.closest('.project-item').classList.add('active');
            }
            else if (elem.innerHTML.includes(e.target.innerHTML)) {
                elem.closest('.project-item').classList.add('active');
            }
        })

    }
});


const selectCategory = (elem) =>{
    elem.classList.toggle('active');
    // selectCategoryBtn.classList.remove('active')
}


selectProjectNav.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
        e.preventDefault();

        const categoriesArr = document.querySelectorAll('.filter-item button');
        categoriesArr.forEach((category) => {
            category.classList.remove('active');
            if (category.innerHTML === e.target.innerHTML) {
                category.classList.add('active');
            }
        })

        const projectsListElems = document.querySelectorAll('.project-item p');
        projectsListElems.forEach(elem => {
            elem.closest('.project-item').classList.remove('active');
            if (e.target.innerHTML === 'All') {
                elem.closest('.project-item').classList.add('active');
            }
            else if (elem.innerHTML.includes(e.target.innerHTML)) {
                elem.closest('.project-item').classList.add('active');
            }
        })

        selectCategoryBtn.classList.remove('active')

    }
})


// contact form validity check

const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.form-input');
const formSendBtn = document.querySelector('.form-btn');

formInputs.forEach(inputFeild=>{
  inputFeild.addEventListener("input", ()=> {

    if (form.checkValidity()) {
      formSendBtn.removeAttribute("disabled");
    } else {
      formSendBtn.setAttribute("disabled", "");
    }

  });
})