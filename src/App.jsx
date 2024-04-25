import { useState } from 'react'
import catExplotano from './assets/maxresdefault.jpg'
import './App.css'
import Button from './button/Button.jsx'
import Container from './container/Container.jsx'
import Layout from './layout/Layout.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Container>
        <Layout>
          <img src={catExplotano} width="300" height="300"></img>
        </Layout>
      </Container>
      <Container>
        <Button onClick={() => console.log("Hello World")} label="aaaaa" />
        <Button onClick={() => console.log("World!!")} label="bbbbb" />
      </Container>
    </Container>
  )
}



export default App
