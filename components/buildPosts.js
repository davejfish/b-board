export default function createBuildPosts(root) {
    root.innerHTML = '';

    return ({ messages }) => {
        for (let message of messages) {
            const div = document.createElement('div');
            div.classList.add('box');

            const h2 = document.createElement('h2');
            h2.textContent = message.title;

            const span1 = document.createElement('span');
            span1.textContent = message.description;

            const span2 = document.createElement('span');
            span2.textContent = message.contact;

            const span3 = document.createElement('span');
            span3.classList.add('small-text');
            const timeStamp = new Date(message.created_at);
            span3.textContent = timeStamp;

            div.append(h2, span1, span2, span3);
            root.append(div);
        }
    };
}