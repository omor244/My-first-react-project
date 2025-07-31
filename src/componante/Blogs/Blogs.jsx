import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({HandelToBookmarks}) => {
    const [blogs, setblogs] = useState([])

    useEffect(() =>{

          fetch('blog.json')
          .then(res => res.json())
          .then( data => setblogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-4xl'>Blogs: {blogs.length}</h1>
            {

                blogs.map(blog => <Blog
                     key={blog.id}
                      blog={blog}
                     HandelToBookmarks={HandelToBookmarks}
                      ></Blog>)
            }
        </div>
    );
};

export default Blogs;