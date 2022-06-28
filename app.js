// import services and utilities
import { getPosts, signOut } from './services/posts-service.js';
// import component creators
import createBuildPosts from './components/buildPosts.js';
import createSignOut from './components/signOut.js';
import createBuildMessage from './components/buildMessage.js';
// declare state variables
import state from './state.js';
// write handler functions

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

async function handlePageLoad() {
    state.messages = await getPosts();
    display();
}

function handleFilter({ data }) {
    const params = new URLSearchParams(window.location.search);
    params.set('create', data.create);

    window.location.search = params.toString();
}

async function handleSignOut() {
    signOut();
}

const BuildPosts = createBuildPosts(document.querySelector('.b-box'));
const SignOut = createSignOut(document.querySelector('.sign-out'), { handleSignOut });
const BuildMessage = createBuildMessage(document.querySelector('.create-post'), { handleFilter });

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    BuildPosts({ messages: state.messages });
    SignOut();
    BuildMessage();
}

// Call display on page load
handlePageLoad();
