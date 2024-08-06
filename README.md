# AmazonInventory

======================================

## Descripción

Servicio para consultar un listado de productos de la api de amazon y copiar el mismo a una base de datos en Mongo Atlas

## Dependencias

Se necesitan los siguientes prerrequisitos para poder realizar la instalación:

- `NodeJS v12.x`
- `Git`
- `npm`

## Descargar 

Para descargar el proyecto es necesario descargar del la siguiente `url`: https://github.com/EfrenRicardoInzunzaValenzuela/AmazonInventory/archive/refs/heads/main.zip

Se descargara un archivo `.zip`, se tiene que **descomprimir** en la ruta que sea más conveniente y renombrar la carpeta con el nombre correspondiente.

Una vez realizado lo anterior, hay que posicionarse dentro de la carpeta, y ejecutar el comando:

```npm
npm install
```

Este comando es para instalar las **dependencias** necesarias para el entorno de desarrollo y de la aplicación, una vez que las **dependencias** están instaladas ejecutar el siguiente comando para ejecutar la aplicación de manera local.

```npm
npm start
```

Este comando crea una instancia `http server` en el puerto `3000`, esto para poder probar la aplicación base creada.


## Variables de entorno

```env
AMAZON_ACCESS_KEY_ID=access_key
AMAZON_SECRET_ACCESS_KEY=secret_key
AMAZON_ASSOCIATE_TAG=associate_tag
MONGODB_URI=mongodb+srv://testApi:testApi123@cluster0.ax9ah.mongodb.net/amazonInventory
```
## End Points 

```http
GET http://localhost:3000/api/fetch-inventory
content-type: application/json
```

```http
GET http://localhost:3000/api/fetch-catalog
content-type: application/json
```
