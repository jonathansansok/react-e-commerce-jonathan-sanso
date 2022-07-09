//imports
import React from 'react';
import { useForm } from "react-hook-form";
import { edadValidator } from "./contactovalidators";
import '../hojas-de-estilo/contacto.css';


const Contacto = () => {
    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'Sr./a',
            direccion: 'Tu Calle'

        }
    });

    const onSubmit = (datos) => {
        console.log(datos);
    }

    const incluirTelefono = watch('incluirTelefono');

    return <div className="full-form">
        <h2>Formulario</h2>
        <p className= "reglon-de-form">Un gusto {watch('nombre')}</p>
        <form  className="formulario" onSubmit={handleSubmit(onSubmit)}>
            <div className= "reglon-de-form">
                <label>Nombre y Apellido </label>
                <input type="text" {...register('nombre', {
                    required: true,
                    maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
            <div className= "reglon-de-form">
                <label>Dirección </label>
                <input type="text" {...register('direccion', {
                    required: true
                })} />
            </div>
            <div className= "reglon-de-form">
                <label>Email </label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
            </div>
            <div className= "reglon-de-form">
                <label>Edad </label>
                <input type="text" {...register('edad', {
                    validate: edadValidator
                })} />
                {errors.edad && <p>La edad debe estar entre 18 y 100</p>}
            </div>
            <div className= "reglon-de-form">
                <label>País </label>
                <select {...register('pais')}>
                    <option value="ar">Argentina</option>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="fr">Francia</option>
                </select>
            </div>
            <div className= "reglon-de-form">
                <label>¿Incluir teléfono? </label>
                <input type="checkbox" {...register('incluirTelefono')} />
            </div>
            {incluirTelefono && (
                <div className= "reglon-de-form">
                    <label>Teléfono</label>
                    <input type="text" {...register('telefono')} />
                </div>
            )}
            <input className= "reglon-de-form enviar" type="submit" value="Enviar" />
        </form>
    </div>
}

export default Contacto;