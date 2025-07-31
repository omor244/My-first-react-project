
import Header from './componante/Header/Header'
import './App.css'
import Blogs from './componante/Blogs/Blogs'
import Booksmarks from './componante/Booksmarks/Booksmarks'
import { useState } from 'react'

function App() {
  const [Booksmark, setBookmarks] = useState([])

  const HandelToBookmarks = blog =>{
    const newbookmarks = [...Booksmark, blog]
    setBookmarks(newbookmarks)
   
  }

  return (
    <>
     
      <Header></Header>
      <div className='md:flex w-10/12 mx-auto gap-14'>
        <Blogs HandelToBookmarks={HandelToBookmarks}></Blogs>
        <Booksmarks Booksmark={Booksmark}></Booksmarks>
      </div>
     
    </>
  )
}

export default App
