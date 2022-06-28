export default function createSignOut(button, { handleSignOut }) {
    button.addEventListener('click', () => {
        handleSignOut();
    });

    return () => {
        
    };
}