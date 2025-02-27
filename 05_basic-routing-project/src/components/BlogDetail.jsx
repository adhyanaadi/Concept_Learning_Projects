import React from 'react'
import { useParams } from 'react-router'

const blogPosts = [
    { id: "1", title: "React Basics", content: "Introduction to React." },
    { id: "2", title: "React Router Guide", content: "Using React Router efficiently." },
]
export default function BlogDetail() {

    const {id} = useParams();
    const post = blogPosts.find((p)=>p.id===id)

    if (!post) return <h2>Post Not Found</h2>
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )
}
