//This contains the logic for getting and displaying the blog information
const goBack = document.getElementById('back');
const blogSection = document.getElementById('main-blog');
let blogArray = JSON.parse(localStorage.getItem('blogArray')) || []
//Create a UI element for each blog post
for(i = 0; i < blogArray.length; i++) {
    //Assign variables from blog array
    let titleVal = blogArray[i].title;
    let nameVal = blogArray[i].username;
    let contentVal = blogArray[i].content;
    //Create elements in HTML
    const row = document.createElement('div');
    const colL = document.createElement('div');
    const colR = document.createElement('div');
    const btitle = document.createElement('h3');
    const bName = document.createElement('p');
    const bContent = document.createElement('p');
    //Add class names for CSS 
    row.className = "blog-row";
    colL.className = "blog-col-left";
    colR.className = "blog-col-right";
    btitle.className = "blog-title";
    bName.className = "blog-name";
    bContent.className = "blog-content";
    //Append children to appropriate containers
    blogSection.appendChild(row);
    row.appendChild(colL);
    row.appendChild(colR);
    colL.appendChild(btitle);
    colL.appendChild(bName);
    colR.appendChild(bContent);
    //Assign text in new elements
    btitle.textContent = titleVal;
    bName.textContent = nameVal;
    bContent.textContent = contentVal;
}
//A button for navigating back to form page
goBack.addEventListener('click', function (event) {
    event.preventDefault();

    window.location = './index.html';
})
