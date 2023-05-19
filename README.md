## AWS USANDO LAMBDA, DYNAMO, API GATEWAY

Este proyecto tiene una serie de archivos de funciones creadas en lambda aws, para poder hacer peticiones a base de datos DynamoDb.


## INFORMACIÓN 

```
    CrearProducto.js
```
Este archivo tiene el codigo para `insertar` x producto a dynamo.

```
    listarProducto.js
```

En el archivo contiene codigo para `listar` todos los prosuctos registrados

```
    actualizarProducto.js
```

En el archivo contiene codigo para `modificar` un registro que ya esta registrado en la base de datos.

```
    eliminarProducto.js
```
En el archico contiene codigo para `eliminar` un registro de producto que ya esta registrado en la base de datos.

```
    buscarProducto.js
```

En el archivo contiene codigo para `buscar` un registro de producto, por medio del `Id`

```
    crearMultiProductos.js
```

En el archivo contiene codigo para `insertar multiples` registros a la base de datos.

```
    NODEAWS
        POSTMAN
            UNIVO-AWS.postman_collection.json
```
En esta carpeta contiene la colleccion de postman solo se importa en el espacio de postman para poder hacer las peticiones

## POLICY IAM


## COLLECCION DE POSTMAN

Listar todos los registros
```
 Get Products
    ruta: https://d309i818rh.execute-api.us-east-1.amazonaws.com/productos
```

Buscar registro por Id
```
    Get Products Item by Id
    ruta : https://d309i818rh.execute-api.us-east-1.amazonaws.com/productoId?id=0e51e96c-0620-4d29-8995-cd5f8afa98af
```

Crear un registro
```
    Create product
    ruta: https://d309i818rh.execute-api.us-east-1.amazonaws.com/producto

    insercion json

    {
    "nombre": "Grand Theft Auto VI 14 ",
    "compania": "GTA",
    "descripcion": "Dos localizaciones diferentes y será el primero con una protagonista femenina y transcurrirá en Miami  ",
    "lanzamiento": "2023",
    "consola": "PC PS4 XBOne PS5 XSX"
    }
```

Crear multiples registros

```
    Create Product insert multi
    ruta: https://d309i818rh.execute-api.us-east-1.amazonaws.com/productosMulti

    insercion json

    [
    {
        "nombre": "basurita 3",
        "compania": "basura",
        "consola" : "ingreso",
        "descripcion" : "refer",
        "lanzamiento" : "2022"
    },
    {
        "nombre": "basurita 2",
        "compania": "basura",
        "consola" : "ingreso",
        "descripcion" : "refer",
        "lanzamiento" : "2022"
    }
]
```

Editar registro por id

```
    Edit Product by Id
    ruta: https://d309i818rh.execute-api.us-east-1.amazonaws.com/productedit?id=7a011a50-047c-4506-a7a8-a79789b85ba0

    insercion json
    {
    "id" : "7a011a50-047c-4506-a7a8-a79789b85ba0",
    "nombre": "PS9",
    "compania": "Sony",
    "consola" : "Play Station",
    "descripcion" : "Juego de ROBLOX"
}
```

Eliminar Registro por id

```
    Del Product Item by Id
    ruta: https://d309i818rh.execute-api.us-east-1.amazonaws.com/productDelete?id=0e51e96c-0620-4d29-8995-cd5f8afa98af

```


