import {useForm} from 'react-hook-form'
import { signInWithEmailAndPassword, auth } from '../../helpers/firebase'
import { LoginInputs } from './types'
import styles from './loginForm.module.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const {register, handleSubmit, reset} = useForm<LoginInputs>()

    const handleLogIn = (data: LoginInputs) => {
        signInWithEmailAndPassword(auth, data.user, data.password)
        .then(() => alert('inicio de sesión satisfactorio'))
        .catch(() => alert('usuario y/o contraseña incorrectos, vuelva a intentarlo'))
        reset()
      }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogIn)} className={styles.form}>
          <input placeholder='Usuario' {...register("user")} />
          <input type='password' placeholder='Contraseña' {...register("password")} />
          <button type="submit">Iniciar sesión</button>
          <Link to={'/register'}>Registrarse</Link>
          <Link to={'/'}>Home</Link>
      </form>
    </>
  )
}

export default LoginForm