import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from './../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostPage = () => {
    const params = useParams()

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoadingPost, errorPost] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    const [fetchCommentsByPostId, isLoadingComments, errorComments] = useFetching(async (id) => {
        const response = await PostService.getCommentsByIdPost(id);
        console.log(response);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchCommentsByPostId(params.id);
    }, [])

    return (
        <div>
            {isLoadingPost
                ? <Loader />
                : (
                    <div>
                        <h1 style={{textAlign: "center"}}>{post.title}</h1>
                        <p><span style={{fontWeight: "bold"}}>Описание:</span> {post.body}</p>
                    </div>
                )
            }
            {isLoadingComments
                ? <Loader />
                : <div>
                    <h2>Комментарии: </h2>
                    {comments.map(com => 
                        <div style={{marginTop: 15}}>
                            <h5>{com.email}</h5>
                            <p>{com.body}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostPage