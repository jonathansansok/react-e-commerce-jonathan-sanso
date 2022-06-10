import React  from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import ItemCount from './ItemCount.jsx';

function ItemListContainer({titulo2}){
    return (
        <>
            <h2>{titulo2} </h2>
            <ItemCount
            />
        </>
    );
}

 export default ItemListContainer; 