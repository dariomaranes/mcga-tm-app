import styles from './registerForm.module.css'
import {useForm} from 'react-hook-form'
import { Inputs } from './types'
import { createUserWithEmailAndPassword, auth } from '../../helpers/firebase'
import { Link } from 'react-router-dom'

const RegisterFrom = () => {
    const {register, handleSubmit, reset} = useForm<Inputs>()

    const handleSignUp = (data: Inputs) => {
        createUserWithEmailAndPassword(auth, data.user, data.password).then(() => alert('usuario creado correctamente')).catch(() => alert('usuario ya registrado, vuelva a intentarlo'))
        reset()
      }

  return (
    <>
      <h1>Registro de usuarios</h1>
      <form onSubmit={handleSubmit(handleSignUp)} className={styles.form}>
          <input placeholder='Usuario' {...register("user")} />
          <input type='password' placeholder='Contraseña' {...register("password")} />
          <button type="submit">Registrarse</button>
          <Link to={'/login'}>Login</Link>
          <Link to={'/'}>Home</Link>
      </form>
    </>
  )
}

export default RegisterFrom