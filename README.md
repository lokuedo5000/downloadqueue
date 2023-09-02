# Documentación del Módulo DownloadQueue

Este es un módulo de Node.js llamado `DownloadQueue` que permite descargar archivos desde una URL y guardarlos localmente en el sistema de archivos. A continuación, encontrarás información sobre cómo instalar y usar este módulo en tus proyectos.

## Instalación

Para instalar este módulo, Abre tu terminal y ejecuta el siguiente comando:

```bash
npm install downloads-queue-go
```

## Uso

Una vez que hayas instalado el módulo, puedes usarlo en tus proyectos de Node.js. Aquí tienes un ejemplo de cómo importar y usar la clase `DownloadQueue` en tu código:

```javascript
const DownloadQueue = require("downloads-queue-go");

// Encolar descarga
downloadQueue.enqueue({
  pathID: "img1",
  url: "https://example.com/file1.jpg",
  dest: "./file1.jpg",
});

// Segunda descarga
downloadQueue.enqueue({
  pathID: "img2",
  url: "https://example.com/file2.jpg",
  dest: "./file2.jpg",
});

// ...

```

## Uso Personalizado de la Cola de Descargas

```javascript
const DownloadQueue = require("downloads-queue-go");

// Lista de archivos para descargar
const filesToDownload = [
  { pathID: "img1", url: "https://example.com/file1.jpg", dest: "./file1.jpg" },
  { pathID: "img2", url: "https://example.com/file2.jpg", dest: "./file2.jpg" },
  { pathID: "img3", url: "https://example.com/file3.jpg", dest: "./file3.jpg" },
  // Agrega más archivos aquí
];

// Encolar las descargas
filesToDownload.forEach((fileInfo) => {
  downloadQueue.enqueue(fileInfo);
});

// Monitorear el progreso de las descargas
setInterval(() => {
  for (const fileId in downloadQueue.downloadInformation) {
    // Obtenemos información sobre una descarga específica en la cola de descarga
    const file = downloadQueue.downloadInformation[fileId];

    // Mostramos en la consola el ID de la descarga y el progreso en porcentaje
    console.log(`${file.id}: ${file.progress}% completado`);
  }
}, 1000);
```

### Nombre del Desarrollador

- Nombre: lokuedo5000
- Correo Electrónico: lokuedo5001@email.com
- Perfil de GitHub: https://github.com/lokuedo5000

Si tienes alguna pregunta o necesitas soporte técnico, no dudes en ponerte en contacto con el desarrollador.

Si encuentras algún problema o necesitas ayuda con el módulo `DownloadQueue`, aquí tienes algunas opciones:

### Informar un Problema

Si crees que has encontrado un error o un problema con el módulo, por favor crea un "issue" en el repositorio oficial en [GitHub](https://github.com/lokuedo5000/downloads-queue-go/issues). Asegúrate de proporcionar la siguiente información al informar un problema:

- Descripción detallada del problema.
- Paso a paso para reproducir el problema.
- Capturas de pantalla (si es aplicable).
- Versión del módulo y versión de Node.js que estás utilizando.

### Soporte Comunitario

Si tienes preguntas generales sobre el uso del módulo o necesitas orientación, puedes publicar tus preguntas en la sección de "Discusiones" del repositorio en GitHub. La comunidad de usuarios y el desarrollador pueden ayudarte con tus consultas.

### Contactar al Desarrollador

Si tienes consultas más específicas o necesitas ayuda urgente, puedes ponerte en contacto directamente con el desarrollador a través de su correo electrónico: lokuedo5001@email.com.

Por favor, sé lo más claro y detallado posible al describir cualquier problema o pregunta que puedas tener. Estamos aquí para ayudarte a resolver cualquier dificultad que encuentres al utilizar `DownloadQueue`.
