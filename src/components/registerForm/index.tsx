import styles from './registerForm.module.css'
import {useForm} from 'react-hook-form'
import { Inputs } from './types'
import { createUserWithEmailAndPassword, auth } from '../../helpers/firebase'

const RegisterFrom = () => {
    const {register, handleSubmit, reset} = useForm<Inputs>()

    const handleSignUp = (data: Inputs) => {
        createUserWithEmailAndPassword(auth, data.user, data.password).then(() => alert('usuario creado correctamente')).catch(() => alert('usuario ya registrado, vuelva a intentarlo'))
        reset()
      }

  return (
    <form onSubmit={handleSubmit(handleSignUp)} className={styles.form}>
        <h1>Registro de usuarios</h1>

        <input placeholder='Usuario' {...register("user")} />
        <input placeholder='Contraseña' {...register("password")} />
        <button type="submit">Registrarse</button>
        <a href='/login'>Login</a>
    </form>
  )
}

export default RegisterFrom