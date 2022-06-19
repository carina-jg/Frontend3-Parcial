import { useState } from "react";
import { Product, ProductSpan, Button } from "../styles/Styles"

// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")


export default function Item({nombre, descripcion, stock, contadorCarrito}) {
  const [cantStock, setStock] = useState(stock);

  const handlerStock = () => {
    if (cantStock > 0) {
      setStock(prevState => prevState - 1);
      contadorCarrito();
    }
  };

  return (
    <Product>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>En stock: {cantStock <= 0 ? <ProductSpan>agotado</ProductSpan> : cantStock}</h5>
      <Button disabled={cantStock === 0} onClick={() => handlerStock()}>{cantStock <= 0 ? "Sin stock" : "Comprar"}</Button>
    </Product>
  )
}
