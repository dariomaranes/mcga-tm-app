import { useForm } from "react-hook-form";
import { FormValues } from "./types";
import styles from './exampleForm.module.css'
import {validateTextFields, validateAge} from "./util";

const ExampleForm = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm({defaultValues: {
        name: "",
        email: "",
        city: "",
        terms: false,
        age: 0
      }, mode: "onBlur"});

    const onSubmit = (data: FormValues) => {
        alert('Los datos pasaron las validaciones');
        reset();
        console.log('Datos enviados', data)
    }

    const EMAIL_PATTERN = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    return (
    <>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Nombre Completo" {...register("name", {
                required: {
                    value: true,
                    message: "Nombre es requerido."
                },
                validate: validateTextFields
                })}
            />
            <span className={styles.errors}>{errors.name?.message}</span>

            <input placeholder="Email" {...register("email", {
                required: "Email es requerido",
                minLength: {
                    value: 3,
                    message: "Debe contener al menos 3 caracteres"
                },
                pattern: {
                    value: EMAIL_PATTERN,
                    message: "Email debe tener un formato válido"
                }
                })}
            />
            <span className={styles.errors}>{errors.email?.message}</span>

            <input placeholder="Edad" {...register("age", {
                required: "Edad es requerida",
                min: {
                    value: 18,
                    message: "Debes ser mayor de 18 o menor de 99 años"
                },
                validate: validateAge
            })} />
            <span className={styles.errors}>{errors.age?.message}</span>

            <select {...register("city", {required: "Por favor selecciones una ciudad"})}>
                <option value="">Seleccione una ciudad...</option>
                <option value="rosario">Rosario</option>
                <option value="parana">Parana</option>
                <option value="cordoba">Cordoba</option>
                <option value="mendoza">Mendoza</option>
            </select>
            <span className={styles.errors}>{errors.city?.message}</span>

            <div>
                <label>Terminos y condiciones</label>
                <input type="checkbox" {...register("terms", {required: true})} />
            </div>

            {/* <button className={styles.submit} type="submit">Enviar</button> */}
            <input className={styles.submit} type = "submit" value = "Enviar" />
        </form>
    </>
  )
}

export default ExampleForm