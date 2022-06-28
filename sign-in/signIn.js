// import services and utilities
import { signIn, signUp } from '../services/posts-service.js';
// import component creators
import createFormAuth from '../components/formAuth.js';
import createAuthError from '../components/authError.js';
// declare state variables
import state from '../state.js';
// write handler functions
async function handlePageLoad() {
    
    display();
}

async function handleSignIn(email, password) {
    // wait for signIn(), run with checkAuth(response)
    const response = await signIn(email, password);
    checkAuth(response);
}

async function handleSignUp(email, password) {
    const response = await signUp(email, password);
    checkAuth(response);
}

function checkAuth(response) {
    // if error display error, otherwise redirect page to create post
    if (response.error) {
        state.errorMessage = response.error.message;
        console.log(state.errorMessage);
        display();
    }
    else {
        location.replace('../');
    }
}

// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

const SignIn = createFormAuth(document.querySelector('.sign-in'), { handleAuth: handleSignIn });
const SignUp = createFormAuth(document.querySelector('.sign-up'), { handleAuth: handleSignUp });
const AuthError = createAuthError(document.querySelector('.error-message'));


// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    SignIn();
    SignUp();
    AuthError({ errorMessage: state.errorMessage });
}

// Call display on page load
handlePageLoad();
