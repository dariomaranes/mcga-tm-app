import {useForm} from 'react-hook-form'
import { signInWithEmailAndPassword, auth } from '../../helpers/firebase'
import { LoginInputs } from './types'

const LoginForm = () => {
    const {register, handleSubmit, reset} = useForm<LoginInputs>()

    const handleSignUp = (data: LoginInputs) => {
        signInWithEmailAndPassword(auth, data.user, data.password)
        .then(() => alert('inicio de sesión satisfactorio'))
        .catch(() => alert('usuario y/o contraseña incorrectos, vuelva a intentarlo'))
        reset()
      }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Login</h1>

        <input placeholder='Usuario' {...register("user")} />
        <input placeholder='Contraseña' {...register("password")} />
        <button type="submit">Iniciar sesión</button>
        <a href="/register">Registrarse</a>
    </form>
  )
}

export default LoginForm