
# API

### En esta carpeta se encuentra el código fuente de la API,  de igual manera como está aclarado en el `readme.md` de la carpeta `collections`, lo aclaro nuevamente en esta sección. Existe una versión de esta API alojada en un servidor (https://api-gcba.francaminos.com/) para que pueda ser consultada sin la necesidad de correr el proyecto localmente, tambien incluye un swagger (https://api-gcba.francaminos.com/api-docs/) donde se pueden ver los endpoints disponibles.

### Tecnologías utilizadas
- Node.js (18.14.1)
- Sequelize
- ExpressJS
- Typescript
- Dotenv
- MySQL
- Swagger

### Levantar localmente el proyecto

En primer lugar hay que clonar el proyecto en una ruta de preferencia, ya sea usando HTTPS o SSH

**`HTTPS`** `git clone https://github.com/vonKaster/GCBA-EntrevistaTecnica.git`
**`SSH`** `git clone git@github.com:vonKaster/GCBA-EntrevistaTecnica.git`

Luego de haber clonado hay que ingresar dentro de la siguiente ruta `GCBA-EntrevistaTecnica/Ejercicio1 - API RESTful/api` , y dentro de la carpeta abrir una `shell` para instalar las depencias necesarias

`npm install`

Después de eso, hay que crear un archivo llamado `.env` donde vamos a definir las variables de entorno, existe un archivo llamado `env.example` donde hay una plantilla de cuales son y que tipo de dato contienen.

Una vez hecho todo esto, ya solamente resta encender la API

`npm run dev`
