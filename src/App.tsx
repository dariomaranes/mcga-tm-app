import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Product from './components/product'
// import ExampleHook from './components/exampleHook'
// import ExampleForm from './components/exampleForm'
import RegisterFrom from './components/registerForm'
// import LoginForm from './components/loginForm'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <RegisterFrom />
      {/* <LoginForm /> */}
      {/* <h1>Vite + React</h1>
      <ExampleHook /> */}
      {/* <h1>React Hook Form</h1> */}
      {/* <ExampleForm /> */}
      {/* <Product title={'Teclado'} description={'Descripción para Teclado'} stock={100} />
      <Product title={'Mouse'} description={'Descripción para Mouse'} /> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Product title={'Monitor'} description={'Descripción para Monitor'} />
      <Product title={'Escritorio'}/> */}
    </>
  )
}

export default App
