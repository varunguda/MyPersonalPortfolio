
const navCategories = document.querySelector('.navbar-list');
const sidebar = document.querySelector('.sidebar');
const showContactButton = document.querySelector('.info_more-btn span');
const showContactIcon = document.querySelector('.info_more-btn ion-icon');


navCategories.addEventListener('click',(e)=>{
    if(e.target.closest("li")){
        e.preventDefault();

        const categoriesArr = document.querySelectorAll(".navbar-item button");
        categoriesArr.forEach(category=>{
            category.classList.remove('active')
        })

        e.target.classList.add('active');

        const articles = document.querySelectorAll('article');
        articles.forEach(article=>{
            article.classList.remove('active')
            if(article.classList.contains(e.target.textContent.toLowerCase())){
                article.classList.add('active')
            }
        })
    }
});

const expandContact = () =>{
    sidebar.classList.toggle('active');
    if(showContactButton.innerHTML === 'Show Contacts'){
        showContactButton.innerHTML = 'Hide Contacts'
        showContactIcon.style.transform = 'rotate(180deg)'
    }else{
        showContactButton.innerHTML = 'Show Contacts';
        showContactIcon.style.transform = 'rotate(0deg)'
    }
}

