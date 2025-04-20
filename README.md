# Práctica Final DevOps CI/CD - HTML "Hola Mundo" 🚀

Este proyecto forma parte de la práctica final del curso de DevOps. Tiene como objetivo aplicar conceptos clave como control de versiones, pruebas automatizadas, contenedores Docker, integración continua (CI) con GitHub Actions y despliegue con GitHub Pages.

## Descripción

La práctica consiste en:

1. Crear una página web simple en HTML que muestre un mensaje "Hola Mundo".
2. Desarrollar una prueba unitaria para verificar que la página contenga el mensaje correcto.
3. Construir un contenedor Docker utilizando Nginx para servir la página localmente.
4. Configurar GitHub Actions para ejecutar automáticamente las pruebas al realizar cambios en el repositorio.
5. Publicar la página HTML en GitHub Pages.

## Prueba unitaria

Se utiliza Python con `unittest` para validar que el archivo `index.html` contiene el texto "Hola Mundo".

## Docker

El contenedor se basa en Nginx (alpine) y se construye con un simple `Dockerfile` que copia el `index.html` a la carpeta predeterminada de Nginx.

```bash
docker build -t hola-mundo .
docker run -d -p 8080:80 hola-mundo
```
Visita: http://localhost:8080

## GitHub Actions
Se incluye un workflow CI que se activa en cada push o pull request al branch main. Ejecuta la prueba unitaria para garantizar que la página cumple con los requisitos.

## GitHub Pages
La página se encuentra publicada en GitHub Pages para acceso público. Puedes accederla desde la pestaña Pages en la configuración del repositorio.

## Autora
Estudiante: Yameli Martínez Taveras
Matrícula: 2023-1390