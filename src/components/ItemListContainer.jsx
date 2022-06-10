import React  from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import ItemCount from './ItemCount.jsx';

function ItemListContainer(propsfrase){
    return (
        <>
            <h2>{propsfrase.titulo2} </h2>
            <ItemCount
            />
        </>
    );
}

 export default ItemListContainer; 