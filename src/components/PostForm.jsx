import React from 'react'
import { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (e) => {
        e.preventDefault();
        if (post.title === "") return;
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: "", body: ""})
      }

    return (
        <div>
            <form action="">
                {/*Управляемый компонент*/}
                <MyInput
                    onChange={e => setPost({...post, title: e.target.value})}
                    value={post.title} 
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    onChange={e => setPost({...post, body: e.target.value})}
                    value={post.body}
                    type="text" placeholder="Описание"/>
                <MyButton onClick={addNewPost}>Добавить пост</MyButton>
            </form>
        </div>
    )
}

export default PostForm