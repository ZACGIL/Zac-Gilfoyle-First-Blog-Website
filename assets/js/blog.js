const goBack = document.getElementById('back');

let blogInfo = JSON.parse(localStorage.getItem('blogInformation'))||{}

goBack.addEventListener('click', function(event){
    event.preventDefault();

    window.location = './index.html';
}

)
