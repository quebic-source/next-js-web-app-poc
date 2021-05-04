
function Users({ posts }) {
    return (
        <div>
            Users List
            <ul>
                {posts.map((post) => (
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const posts = await res.json()

    if (!posts) {
        return {
            notFound: true,
        }
    }

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}


export default Users