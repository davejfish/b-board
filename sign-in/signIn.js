// import services and utilities

// import component creators
import createFormAuth from '../components/formAuth.js';
// declare state variables
import state from '../state.js';
// write handler functions

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

async function handlePageLoad() {
    
    display();
}

async function handleSignIn(email, password) {
    console.log(email, password);
    // wait for signIn(), run with checkAuth(response)
}

async function handleSignUp(email, password) {
    console.log(email, password);
}

function checkAuth(response) {
    // if error display error, otherwise redirect page to create post
}

const SignIn = createFormAuth(document.querySelector('.sign-in'), { handleAuth: handleSignIn });
const SignUp = createFormAuth(document.querySelector('.sign-up'), { handleAuth: handleSignUp });


// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    SignIn();
    SignUp();
}

// Call display on page load
handlePageLoad();
