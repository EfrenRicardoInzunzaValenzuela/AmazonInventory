# AmazonInventory

======================================

## Descripción

Servicio para consultar un listado de productos de la api de amazon y copiar el mismo a una base de datos en Mongo Atlas

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
