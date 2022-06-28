// import services and utilities
import { addPostItem } from '../services/posts-service.js';
import { projectPage } from '../utils.js';
// import component creators
import createAddPost from '../components/addPost.js';
import createAuthError from '../components/authError.js';
// declare state variables
import state from '../state.js';
// write handler functions
async function handlePageLoad() {
    state.user = await projectPage();
    display();
}

async function handleAddPost(title, content, author) {
    const response = await addPostItem(title, content, author);

    //if error append error message
    // otherwise back to bb

    if (response.error) {
        state.errorMessage = response.error.message;
    }
    else {
        location.replace('../' + window.location.search);
    }
}

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const AddPost = createAddPost(document.querySelector('.create-post'), { handleAddPost });
const AuthError = createAuthError(document.querySelector('.error-message'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    AddPost();
    AuthError;
}

// Call display on page load
handlePageLoad();
