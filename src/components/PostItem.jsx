import React from 'react'
import MyButton from './UI/button/MyButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const PostItem = (props) => {
    const router = useHistory();

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__buttons">
                    <MyButton className='post_btns' onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
                    <MyButton className='post_btns' onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem