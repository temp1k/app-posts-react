import Post from '../Pages/Posts';
import PostPage from '../Pages/PostPage';
import About from '../Pages/About';
import Error from '../Pages/Error';
import Login from '../Pages/Login';


export const privateRoutes = [
    {path: '/posts', component: Post, exact: true},
    {path: '/posts/:id', component: PostPage, exact: true},
    {path: '/error', component: Error, exact: true},
    {path: '/about', component: About, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/about', component: About, exact: true}
]