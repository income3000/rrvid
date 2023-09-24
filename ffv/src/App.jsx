import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsLists from './features/posts/PostsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      
      <h1>React on Rails blog</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minima sapiente modi earum tempora accusantium, veritatis corrupti deleniti temporibus, itaque totam facilis, ea vel commodi sunt illum est necessitatibus asperiores?</p>
      <PostsLists />
      

      
      </div>

    </>

  )
}

export default App
