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

// sign-in, sign out, sign up, get user

export async function signIn(email, password) {
    return client.auth.signIn({ email, password });
}

export async function signUp(email, password) {
    return client.auth.signUp({ email, password });
}