¿Cuál es la diferencia entre autenticación y autorizacion?
Autenticación: Es verificar quién eres (Login con usuario/contraseña).
Autorización: Es determinar qué puedes hacer (Acceder a una ruta o recurso protegido).

¿Cuál es la función del token JWT en la guía?
El JWT es tu identificación digital y pasaporte.
Se genera al hacer login exitosamente.
El cliente lo guarda y lo envía al servidor en cada petición protegida.
El servidor utiliza el JWT (y la clave secreta) para verificar que el cliente es legítimo y, por lo tanto, autorizar el acceso, sin necesidad de mantener una sesión en el servidor.