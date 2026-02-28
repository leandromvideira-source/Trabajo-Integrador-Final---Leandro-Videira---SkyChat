const contacts = [
    {
        id: 1,
        phoneNumber: '11-1233-1233',
        Name: 'Homero',
        last_time_connection: 'hace 2 horas',
        profile_picture: 'https://i.redd.it/0o635tt2siaf1.jpeg',
        statusvideo: '/Estados/Homero1.mp4',
        messages: [
            {
                id: 1,
                Text: 'La suma de las raices cuadradas de dos lados de un triangulo isoceles es igual a la raiz cuadrada del lado restante',
                send_by_name: false, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:00:00',
                is_read: true
            },
            {
                id: 2,
                Text: 'Eso es el equilatero idiota!',
                send_by_name: true,
                created_at: '2023-02-02 12:05:00',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        PhoneNumber: '11-1233-1233',
        Name: 'Bart',
        last_time_connection: 'hace 1 hora',
        profile_picture: '/Avatar/bart.jpg',
        statusvideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        messages: [
            {
                id: 1,
                Text: 'hola como estas?',
                send_by_name: false, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:00:00',
                is_read: true
            },
            {
                id: 2,
                Text: 'Hola, muy bien! en que puedo ayudarte?',
                send_by_name: true,
                created_at: '2023-02-02 12:05:00',
                is_read: false
            }
        ]
    }
    ,
    {
        id: 3,
        PhoneNumber: '11-1233-1233',
        Name: 'moe',
        last_time_connection: 'hace 30 min',
        profile_picture: '/Avatar/moe.jpg',
        statusvideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        messages: [
            {
                id: 1,
                Text: 'hola como estas?',
                send_by_name: false, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:00:00',
                is_read: true
            },
            {
                id: 2,
                Text: 'Hola, muy bien! en que puedo ayudarte?',
                send_by_name: true,
                created_at: '2023-02-02 12:05:00',
                is_read: false
            }
        ]
    },
    {
        id: 4,
        PhoneNumber: '11-1233-1233',
        Name: 'jefe Gorgory',
        last_time_connection: 'hace 45 min',
        profile_picture: '/Avatar/JefeGorgory.jpg',
        statusvideo: '/Estados/Jefe-gogory1.mp4',
        messages: [
            {
                id: 1,
                Text: 'Central! Aqui el jefe gorgory, en persecusion de las mujeres rebeldes!',
                send_by_name: false, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:00:00',
                is_read: true
            },
            {
                id: 2,
                Text: 'Cual es su ubicacion?',
                send_by_name: true,
                created_at: '2023-02-02 12:05:00',
                is_read: false
            },
            {
                id: 1,
                Text: 'Estoy, eh… estoy en una carretera, eh… parece ser asfalto. Pues hay árboles, arbustos, um… ¡y estoy directo bajo el sol uhm...ahora!',
                send_by_name: false, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:01:01',
                is_read: true
            },
        ]
    },
    {
        id: 5,
        PhoneNumber: '11-1233-1233',
        Name: 'Barney Gumble',
        last_time_connection: 'hace 15 min',
        profile_picture: '/Avatar/barney.jpeg',
        statusvideo: '/Estados/barney.mp4',
        messages: [
            {
                id: 1,
                Text: 'Rey de las barredoras? podria limpiar la entrada de mi casa? esta en el pico de las viudas',
                send_by_name: true, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:00:00',
                is_read: true
            },
            {
                id: 2,
                Text: 'ah.. nose me llevaria todo el dia, no podria limpiar ninguna otra entrada',
                send_by_name: false,
                created_at: '2023-02-02 12:05:00',
                is_read: false
            },
            {
                id: 1,
                Text: 'podria pagarla hasta 10000 dolares',
                send_by_name: true, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:00:00',
                is_read: true
            },
            {
                id: 2,
                Text: 'ah.. nose me llevaria todo el dia, no podria limpiar ninguna otra entrada',
                send_by_name: false,
                created_at: '2023-02-02 12:05:00',
                is_read: false
            }
        ]
    },
    {
        id: 6,
        PhoneNumber: '11-1233-1233',
        Name: 'Ned',
        last_time_connection: 'hace 24 min',
        profile_picture: '/Avatar/ned.jpg',
        statusvideo: 'https://www.w3schools.com/html/mov_bbb.mp4',
        messages: [
            {
                id: 1,
                Text: 'hola como estas?',
                send_by_name: false, /*true enviado por mi, false enviado por el contacto  */
                created_at: '2023-02-02 12:00:00',
                is_read: true
            },
            {
                id: 2,
                Text: 'Hola, muy bien! en que puedo ayudarte?',
                send_by_name: true,
                created_at: '2023-02-02 12:05:00',
                is_read: false
            }
        ]
    }
];

export default contacts;
