A partir de la siguiente documentación de un backend genérico
https://ecomerce-master.herokuapp.com/docs

Construye un e-commerce con React.
El diseño es libre y esta vez SÍ se tomará en cuenta.

Características Generales:

Debe tener signup (registro)
Debe tener login (inicio de sesión)
Mostrar productos
Mostrar detalles de producto
Al iniciar sesión, debe distinguir entre usuario de tipo ADMIN y usuario de tipo CUSTOMER

Funcionalidades CUSTOMER:
Sin Usuario / Con Usuario (sin iniciar sesión / con sesión iniciada)

Cuando entro al home puedo ver todos los productos
Siempre hay una barra de búsqueda en la navbar para hacer búsquedas por productos.
Si doy click a un producto, puedo ver su detalle completo en una URL / ruta única para este producto.
Sin Usuario:

En la navbar, del lado derecho, me sugiere hacer signup o login.
La vista de signup, y la vista de login, son urls diferentes ( /login /signup )
Hay un botón comprar en la vista individual del detalle de cada producto, pero este está desactivado y debes mostrar (como desees) una invitación a registrarte o iniciar sesión.
 
Con Usuario:

En la navbar se muestra el nombre de usuario
Se oculta “signup” y “login”
Debe mostrarse un botón de “cerrar sesión” (logout)
Dentro del detalle individual de un producto, se muestra el botón “comprar”
 
Funcionalidades ADMIN:

Debe tener todas las funcionalidades del CUSTOMER
Puede dar de alta nuevos productos
 
Implementar el carrito de compras en esta fase es opcional. Más adelante aprenderemos a trabajar con la Context API para esto :wink:

- Fecha de Entrega: Jueves 4 de Marzo -
