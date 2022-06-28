const SUPABASE_URL = 'https://nwxkvnsiwauieanvbiri.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzAwMzQzNCwiZXhwIjoxOTUyNTc5NDM0fQ.8XIsU0FANdaNeQnT-DojpTL-GTlTPZ4CYZDEetpFpWc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getPosts() {
    const response = await client
        .from('posts')
        .select(`
            title, 
            description, 
            contact`
        )
        .order('created_at', { ascending: false });
    return response.data;
}

export async function addPostItem(title, content, author) {
    const response = await client
        .from('posts')
        .insert([{
            title: title,
            description: content,
            contact: author,
        }])
        .single();
    return response;
}
// sign-in, sign out, sign up, get user

export async function signIn(email, password) {
    return client.auth.signIn({ email, password });
}

export async function signUp(email, password) {
    return client.auth.signUp({ email, password });
}

export async function getUser() {
    return await client.auth.session() && await client.auth.session().user;
}

export async function signOut() {
    await client.auth.signOut();
}