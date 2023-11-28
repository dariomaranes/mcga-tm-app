import styles from './registerForm.module.css'
import {useForm} from 'react-hook-form'
import { Inputs } from './types'

const RegisterFrom = () => {
    const {register, handleSubmit, reset, formState: {errors}, watch} = useForm<Inputs>()

    const onSubmit = (data: Inputs) => {
        console.log(data)
        reset()
    };

    const ONLY_LETTERS = /^[a-zA-Z\s]*$/

    console.log(watch('name'));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h1>React Hook Form</h1>
        <h2>Bienvenido: {watch("name")}</h2>

        <input placeholder='Nombre' {...register("name", {
            required:{
                value: true,
                message: 'El campo nombre es requerido'
            },
            minLength: {
                value: 2,
                message: 'El nombre debe tener al menos 2 caracteres'
            },
            maxLength: {
                value: 10,
                message: 'El nombre debe tener menos de 10 caracteres'
            },
            pattern: {
                value: ONLY_LETTERS,
                message: 'El nombre solo puede contener letras'
            }
            })} />
        <span className={styles.errors}>{errors.name?.message}</span>

        <input placeholder='Edad' {...register("age")} />

        <select {...register("city")}>
            <option value="">Seleccione una ciudad....</option>
            <option value="rosario">Rosario</option>
            <option value="bsas">Buenos Aires</option>
            <option value="parana">Paraná</option>
        </select>

        <div>
            <span>Acepta?</span>
            <input type="checkbox" {...register("check")} />
        </div>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default RegisterFrom