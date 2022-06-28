// get data from forms pass
// pass in handleAuth function with email/password formdata
// return nothing
export default function createFormAuth(form, { handleAuth }) {
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        
        const email = formData.get('email');
        const password = formData.get('password');

        handleAuth(email, password);
    });

    return () => {

    };
}