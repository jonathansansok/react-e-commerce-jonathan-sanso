import React from "react";
import { useForm } from "react-hook-form";
import { edadValidator } from "./utils/contactovalidators";
import "../hojas-de-estilo/contacto.css";
import Swal from "sweetalert2";
//formulario de contacto basado en hook-form bastante aislado del resto de los componentes( no interrume a ningun comp...)
//los errors son para que el usuario tenga que escribir sus campos

const Contacto = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: " ",
      direccion: "",
    },
  });
  //Con el onSubmit y con parametros datos se mandan a consola los datos del usuario
  const onSubmit = (datos) => {
    console.log(datos);
    Swal.fire("Gracias por Contactarnos!");
  };
  //constante que se activa cuando el usuario quiere agregar telefono clickeando el su checkbox
  const incluirTelefono = watch("incluirTelefono");

  return (
    <section className="full-form">
      <h2>Formulario</h2>
      {/*  watch para que el formulario quede mas presentable a la vista del usuario */}
      <p className="reglon-de-form">Un gusto: {watch("nombre")}</p>
      {/* El submit es el botón de enviar de mas abajo */}
      <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
        <article className="reglon-de-form">
          <label>Nombre y Apellido </label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 40,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>El campo nombre debe tener menos de 10 caracteres</p>
          )}
        </article>
        <article className="reglon-de-form">
          <label>Dirección </label>
          <input
            type="text"
            {...register("direccion", {
              required: true,
            })}
          />
        </article>
        <article className="reglon-de-form">
          <label>Email </label>
          <input
            type="text"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </article>
        <article className="reglon-de-form">
          <label>Edad </label>
          <input
            type="text"
            {...register("edad", {
              validate: edadValidator,
            })}
          />
          {errors.edad && <p>La edad debe estar entre 18 y 100</p>}
        </article>
        <article className="reglon-de-form">
          <label>País </label>
          <select {...register("pais")}>
            <option value="ar">Argentina</option>
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
            <option value="Ot">Otro</option>
          </select>
        </article>
        {/* Si el usuario quiere incluir telefono se despliega su menú */}
        <article className="reglon-de-form">
          <label>¿Incluir teléfono? </label>
          <input type="checkbox" {...register("incluirTelefono")} />
        </article>
        {incluirTelefono && (
          <article className="reglon-de-form">
            <label>Teléfono</label>
            <input type="text" {...register("telefono")} />
          </article>
        )}
        <input className="reglon-de-form enviar" type="submit" value="Enviar" />
      </form>
    </section>
  );
};

export default Contacto;
