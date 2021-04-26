import React from 'react'
import PostCard from './PostCard'
import NewPostForm from './NewPostForm'
import { useSelector } from 'react-redux'

const PostsContainer = () => {
    const posts = useSelector((state) => state.posts)
    return (
        <div>
            <NewPostForm />
            <h2>Posts:</h2>
            {posts.map(post => {
                return <PostCard post={post} key={post.id} />
            }
            )}
        </div>
    )
}

export default PostsContainer