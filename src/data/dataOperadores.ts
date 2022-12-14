import { getOperadorState } from "../helpers/getOperadorbyId";


export const operadores = [
    {
        id: '1',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        nombre: 'Nancy Cruz Corona',
        usuario: 'nancy.cruz@timeweb',
        telefono: '55 1992 0550',
        roles: [{
                    "id": "1",
                    "rol": "ADMINISTRADOR DE ANUNCIOS",
                    "descr": "Puede crear, modificar y administrar los anuncios dirigidos a Hub."
                },],
        alta: '18/05/2018',
        estado: 'Activo',
        area: 'Soporte',
        descr: 'Esto es una descripción',
    },
    {
        id: '2',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        nombre: 'Anabel Orozco Gómez',
        usuario: 'anabel.orozco@timeweb',
        telefono: '55 4610 4412',
        roles:  [
                    {
                    "id": "3",
                    "rol": "ADMINISTRADOR DE CONTRATACIONES",
                    "descr": "Puede crear, modificar y administrar las contrataciones que se hagan sobre un cliente."
                    },
                    {
                    "id": "4",
                    "rol": "ADMINISTRADOR DE DAHSBOARD",
                    "descr": "Puede crear, modificar y administrar las cards que se mostrarán en el dashboard principal."
                    },
                    {
                    "id": "5",
                    "rol": "ADMINISTRADOR DE ANUNCIOS",
                    "descr": "Puede crear, modificar y administrar los anuncios dirigidos a Hub."
                    },

                ],
        alta: '18/05/2018',
        estado: 'Activo',
        area: 'Soporte',
        descr: 'Esto es una descripción',
    },
    {
        id: '3',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        nombre: 'Omar Oyorzabal Ramírez',
        usuario: 'omar.oyorzabal@timeweb',
        telefono: '55 9015 0010',
        roles:  [
                    {
                    "id": "1",
                    "rol": "ADMINISTRADOR DE ANUNCIOS",
                    "descr": "Puede crear, modificar y administrar los anuncios dirigidos a Hub."
                    },
                    {
                    "id": "2",
                    "rol": "ADMINISTRADOR DE REPORTES",
                    "descr": "Puede crear, modificar y administrar los reportes del sistema."
                    },
                    {
                    "id": "3",
                    "rol": "ADMINISTRADOR DE CONTRATACIONES",
                    "descr": "Puede crear, modificar y administrar las contrataciones que se hagan sobre un cliente."
                    },
                    {
                    "id": "4",
                    "rol": "ADMINISTRADOR DE DAHSBOARD",
                    "descr": "Puede crear, modificar y administrar las cards que se mostrarán en el dashboard principal."
                    },
                    {
                    "id": "5",
                    "rol": "ADMINISTRADOR DE ANUNCIOS",
                    "descr": "Puede crear, modificar y administrar los anuncios dirigidos a Hub."
                    },
                    {
                    "id": "6",
                    "rol": "ADMINISTRADOR DE ROLES",
                    "descr": "Puede crear, modificar y administrar todos los aspectos que implican asignar roles a un operador"
                    },
                    {
                    "id": "7",
                    "rol": "ADMINISTRADOR DE OPERADORES",
                    "descr": "Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo operador."
                    },
                    {
                    "id": "8",
                    "rol": "ADMINISTRADOR DE CLIENTES",
                    "descr": "Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo cliente."
                    }
                ],
        alta: '18/05/2018',
        estado: 'Activo',
        area: 'Soporte',
        descr: 'Esto es una descripción',
    },
    {
        id: '4',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        nombre: 'Eduardo Ramírez Carmona',
        usuario: 'eduardo.ramirez@timeweb',
        telefono: '55 1992 0550',
        roles:  [
                    {
                    "id": "1",
                    "rol": "ADMINISTRADOR DE ANUNCIOS",
                    "descr": "Puede crear, modificar y administrar los anuncios dirigidos a Hub."
                    },
                    {
                    "id": "2",
                    "rol": "ADMINISTRADOR DE REPORTES",
                    "descr": "Puede crear, modificar y administrar los reportes del sistema."
                    },
                ],
        alta: '18/05/2018',
        estado: 'Activo',
        area: 'Soporte',
        descr: 'Esto es una descripción',
    },
    {
        id: '5',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        nombre: 'Anelia Ramírez Hernández',
        usuario: 'anelia@timeweb',
        telefono: '55 2588 4536',
        roles:  [
                    {
                    "id": "7",
                    "rol": "ADMINISTRADOR DE OPERADORES",
                    "descr": "Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo operador."
                    },
                ],
        alta: '18/05/2018',
        estado: 'Inactivo',
        area: 'Recursos Humanos',
        descr: 'Esto es una descripción',
    },
    {
        id: '6',
        logo: 'https://res.cloudinary.com/journal-app-nom-nom/image/upload/v1664982610/TWComponents/icon-staff_ysea0k.svg',
        nombre: 'Fernando Cárdenas Vázquez',
        usuario: 'fernando.cardenas@timeweb',
        telefono: '55 1992 0550',
        roles:  [
                    {
                    "id": "3",
                    "rol": "ADMINISTRADOR DE CONTRATACIONES",
                    "descr": "Puede crear, modificar y administrar las contrataciones que se hagan sobre un cliente."
                    },
                    {
                    "id": "8",
                    "rol": "ADMINISTRADOR DE CLIENTES",
                    "descr": "Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo cliente."
                    }
                ],
        alta: '18/05/2018',
        estado: 'Inactivo',
        area: 'Desarrollo',
        descr: 'Esto es una descripción',
    },
]

export const typeOperadores = [
    { type: 'TODOS', number: operadores.length },
    { type: 'INACTIVO', number: getOperadorState('Inactivo') },
    { type: 'ACTIVO', number: getOperadorState('Activo') },
    { type: 'DISPONIBLES', number: operadores.length }
];

export const rolesOperadores = [
    {
        id: '1',
        rol: 'ADMINISTRADOR DE CUENTAS',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican crear una nueva cuenta.'
    },
    {
        id: '2',
        rol: 'ADMINISTRADOR DE REPORTES',
        descr: 'Puede crear, modificar y administrar los reportes del sistema.'
    },
    {
        id: '3',
        rol: 'ADMINISTRADOR DE CONTRATACIONES',
        descr: 'Puede crear, modificar y administrar las contrataciones que se hagan sobre un cliente.'
    },
    {
        id: '4',
        rol: 'ADMINISTRADOR DE DAHSBOARD',
        descr: 'Puede crear, modificar y administrar las cards que se mostrarán en el dashboard principal.'
    },
    {
        id: '5',
        rol: 'ADMINISTRADOR DE ANUNCIOS',
        descr: 'Puede crear, modificar y administrar los anuncios dirigidos a Hub.'
    },
    {
        id: '6',
        rol: 'ADMINISTRADOR DE ROLES',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican asignar roles a un operador'
    },
    {
        id: '7',
        rol: 'ADMINISTRADOR DE OPERADORES',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo operador.'
    },
    {
        id: '8',
        rol: 'ADMINISTRADOR DE CLIENTES',
        descr: 'Puede crear, modificar y administrar todos los aspectos que implican crear un nuevo cliente.'
    },
]