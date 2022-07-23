import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
//este componente se monta cuando el comprador termina toda su compra y le muestra su código unico PurchaseID 
const MessageSuccess = ({ purchaseID }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Gracias por su compra! su id de transacción es: {purchaseID}
				En instantes le llegará el mail
			</Alert>
		</Stack>
	);
};

export default MessageSuccess;
