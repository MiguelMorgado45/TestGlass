
import { operadores } from '../data/dataOperadores';

export const getClientebyId = (id:string | undefined ) => {
    
    return operadores.find(operador => operador.id === id);
}

export const getOperadorState = (estado:string) =>{
    return operadores.filter(operador => operador.estado == estado).length;
}
