import { getUser } from './services/posts-service.js';

export async function projectPage() {
    const user = await getUser();
    if (!user) {
        location.replace('../sign-in/');
        return;
    }
    
    return user;
}