import React, { useState } from "react";
import { ProductForm } from "./ProductForm";

export function ProductFormContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: ""
  });

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value
    });
  };

  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  }

const manejarEnvio = async (evento) => {
  evento.preventDefault();
  if (!imagenFile){
    alert("Por favor, seleccione una imagen para el producto");
    return;
  }

  const apiKey = "8ca44337062993d376f103d3f15cf4a7"
  const formData = new FormData()
  formData.append("image", imagenFile)

  try {
    console.log("Subiendo la imagen al servicio Imgbb")
    const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData
    });

    const datosImgbb = await respuestaImgbb.json();

    if (datosImgbb.success) {
      console.log("Datos enviados con éxito al servicio de Imgbb. URl de la imagen: ", datosImgbb.data.url)
      const datosFormCompletos = {
        ...datosForm,
        urlImagen: datosImgbb.data.url
      }
      console.log("Enviando los siguientes datos completos a la API: ", datosFormCompletos)
    } else {
      throw new Error("La subida de la imagen al servicio de Imgbb falló");
    }
  }
  
  catch(error) {
    console.error("Error en el proceso de envío: ", error);
    alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo");
  }
}

  return (
    <>
      <ProductForm 
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarCambioImagen={manejarCambioImagen}
        manejarEnvio={manejarEnvio}
      />
    </>
  );
}
