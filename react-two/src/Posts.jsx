import { use } from "react"

export default function Posts({ fetchPosts }) {


    const posts = use(fetchPosts);
    console.log(posts);
    return (
        <>
            <div className="card">
                <h3>Here are all the post: {posts.length}</h3>
            </div>

        </>
    )
}