import React  from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import ItemCount from './ItemCount.jsx';

function ItemListContainer({titulo2}){
    return (
        <>
            <h2>{titulo2} </h2>
            <ItemCount stock={10} initial={1} />
        </>
    );
}

 export default ItemListContainer; 