
import Header from './componante/Header/Header'
import './App.css'
import Blogs from './componante/Blogs/Blogs'
import Booksmarks from './componante/Booksmarks/Booksmarks'

function App() {
 

  return (
    <>
     
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Booksmarks></Booksmarks>
      </div>
     
    </>
  )
}

export default App
