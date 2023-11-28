import { useState, useEffect } from 'react'
import {User} from './types'

const ExampleHook = () => {

    const [value, setValue] = useState(0)
    const [usersList, setUsersList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const incrementHandler = () => {
        setValue(value + 1)
    }

    const decrementHandler = () => {
        setValue(value - 1)
    }

    const loadingHandler = () => {
        setIsLoading(!isLoading)
    }

    useEffect(() => {
        const URL_API = 'https://jsonplaceholder.typicode.com/users'
        fetch(URL_API)
            .then(response => response.json())
            .then(data => setUsersList(data))
    }, [])

  return (
    <>
        <h1>ExampleHook</h1>
        <h2>El valor actual del contador es: {value}</h2>
        <button onClick={incrementHandler}>Incrementar</button>
        <button onClick={decrementHandler}>Descontar</button>
        <button onClick={loadingHandler}>{isLoading ? 'Mostrar Users' : 'Ocultar Users'}</button>
        {
            isLoading ? <h3>Cargando...</h3> : <ul>
            {
                usersList.map((user: User) => (
                    <li>{user.name}: <a>{user.email}</a></li>
                ))
            }
            </ul>
        }
    </>
  )
}

export default ExampleHook