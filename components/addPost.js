export default function createAddPost(form, { handleAddPost }) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const title = formData.get('title');
        const content = formData.get('info');
        const author = formData.get('author');

        handleAddPost(title, content, author);
    });

    return () => {

    };
}