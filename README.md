# Práctica final DevOps CI/CD con GitHub

Este repositorio contiene una implementación completa de un flujo de trabajo CI/CD utilizando GitHub Actions, pruebas unitarias con Jest, y despliegue automático a GitHub Pages.

## Descripción del proyecto

El proyecto implementa una página web simple "Hola Mundo" con las siguientes características:

- Página HTML básica con estilos CSS
- Pruebas unitarias usando Jest y jsdom
- Servidor web Nginx en Docker para pruebas locales
- Integración continua mediante GitHub Actions
- Despliegue continuo a GitHub Pages

## Estructura del proyecto

```
hola-mundo-devops/
├── index.html             # Página web "Hola Mundo"
├── package.json           # Configuración de npm y dependencias
├── Dockerfile             # Configuración para crear imagen Docker con Nginx
├── .gitignore             # Configuración para ignorar archivos en Git
├── test/
│   └── test.js            # Pruebas unitarias con Jest
└── .github/
    └── workflows/
        └── ci.yml         # Configuración de GitHub Actions
```

## Tecnologías utilizadas

- **Frontend**: HTML5, CSS3
- **Pruebas**: Jest, jsdom
- **Contenedorización**: Docker, Nginx
- **CI/CD**: GitHub Actions
- **Alojamiento**: GitHub Pages

## Cómo ejecutar localmente

### Requisitos previos
- Node.js y npm
- Docker

### Para probar la página web
1. Clonar el repositorio
```bash
git clone https://github.com/yvmeli/hola-mundo-devops.git
cd hola-mundo-devops
```

2. Ejecutar pruebas unitarias
```bash
npm install
npm test
```

3. Ejecutar con Docker
```bash
docker build -t web-hola-mundo .
docker run -p 8080:80 web-hola-mundo
```

4. Visitar `http://localhost:8080` en el navegador

## Flujo de trabajo CI/CD

Este proyecto implementa un flujo de trabajo CI/CD completo:

1. **Integración Continua**: Al hacer push a la rama main, GitHub Actions ejecuta automáticamente las pruebas unitarias.
2. **Entrega Continua**: Si las pruebas pasan, se construye una imagen Docker.
3. **Despliegue Continuo**: La página se despliega automáticamente en GitHub Pages.

## Acceso en vivo

La página está disponible en: [https://yvmeli.github.io/hola-mundo-devops/](https://yvmeli.github.io/hola-mundo-devops/)

## Notas importantes

- Se utilizó Jest en lugar de pruebas en Python para mejor integración con el entorno web
- El archivo `.gitignore` está configurado para excluir `node_modules/` y otros archivos innecesarios
- El despliegue en GitHub Pages se realiza desde la rama `gh-pages`, que es creada automáticamente por el flujo de trabajo

## Autora
Estudiante: Yameli Martínez Taveras
Matrícula: 2023-1390