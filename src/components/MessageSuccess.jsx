import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import '../hojas-de-estilo/MessageSuccess.css';

//este componente se monta cuando el comprador termina toda su compra y le muestra su código unico PurchaseID 
const MessageSuccess = ({ purchaseID }) => {
	return (
		<div className='message-full-top'>
			<Stack sx={{ width: '100%' }} spacing={2}>
				<Alert severity='success'>
					Gracias por su compra! Su id de transacción es: {purchaseID} <br/>
					En instantes le llegará el mail...
				</Alert>
			</Stack>
		</div>
	);
};

export default MessageSuccess;
