import React  from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import ItemCount from './components/ItemCount.jsx';

export function ItemListContainer(propsfrase){
    return (
        <>
            <h2>{propsfrase.titulo2} </h2>
            <ItemCount
            />
        </>
    );
}

 export default ItemListContainer; 