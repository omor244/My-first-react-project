import React, { useDebugValue, useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setblogs] = useState([])

    useEffect(() =>{

          fetch('blog.json')
          .then(res => res.json())
          .then( data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;