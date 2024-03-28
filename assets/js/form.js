//This contains logic for inputing and storing the blog information locally from the form
// Access form inputs in HTML element
const postBlog = document.getElementById('post-it');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
//Get blog array from local storage or set to empty if it doesn't exist
let blogArray = JSON.parse(localStorage.getItem('blogArray')) || [];
//Store inputs in an element then store them locally
function storeInformation() {
    //Collect blog info from user fields
    const blogInformation = {
        username: username.value,
        title: title.value,
        content: content.value.trim()
    }
    //Add user information to end of array
    blogArray.push(blogInformation);
    //Save the latest array to local storage 
    localStorage.setItem('blogArray', JSON.stringify(blogArray));
}
//Call function that stores locally and change window page
postBlog.addEventListener('click', function (event) {
    event.preventDefault();
    //Check if input fields are empty

    if (username.value === '') {
        alert("Please fill in username.");
    } else if (title.value === '') {
        alert("Please fill in title.");
    } else if (content.value === '') {
        alert("Please fill in content.");
    } else {
        storeInformation();
        window.location = './blog.html';
    }
});   