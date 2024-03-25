// Access form inputs in HTML element
const postBlog = document.getElementById('post-it'); 
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');

//Store inputs in an element then store them locally
function storeInformation(){
    const blogInformation = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
    }

    localStorage.setItem('blogInformation', JSON.stringify(blogInformation));
}

postBlog.addEventListener('click', function(event){
    event.preventDefault();

    storeInformation();
    window.location = './blog.html';
  });