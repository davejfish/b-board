export default function createBuildMessage(root, { handleFilter }) {
    root.addEventListener('click', () => {
        const data = {
            'create': true,
        };

        handleFilter({ data });
        window.location.assign('./create-post/');
    });

    return () => {

    };
}