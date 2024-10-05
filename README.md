# FitFortress

Readme de apoyo al equipo para poder llevar un mismo flujo de trabajo y diseño.

## Instalación

**1. Clonar el repositorio**

```bash
git clone [URL del repositorio]
```

**2. Instala las dependencias**

```bash
npm install
```

**3.Inicia el servidor de desarrollo**

```bash
npm run dev
```

## Dependencias utilizadas (Actualizable - no final)

- **React Router Dom:** Para la gestión de rutas en la aplicación.
- **Zustand:** Para la gestión del estado global.

## Flujo de trabajo (Workflow)

Para asegurar la calidad del código y facilitar la colaboración, seguiremos el siguiente flujo de trabajo:

**1. Ramas**

- Crear una nueva rama para cada nueva funcionalidad o corrección de errores. El nombre de la rama debe ser descriptivo (ejemplo: `feature/login`, `fix/navbar`).
  - Esto nos permite trabajar en diferentes partes del proyecto de forma simultánea sin afectar el código principal.

### Cómo crear una rama

1. **Actualiza tu rama principal (`main`)**

   ```bash
   git checkout main
   git pull origin main
   ```

   _Esto asegura tener la version mas reciente del codigo para trabajar.._

2. **Crea una nueva rama**

   ```bash
   git checkout -b nombre-de-la-rama
   ```

   - Reemplaza `nombre-de-la-rama` con un nombre descriptivo, por ejemplo, `feature/login` o `fix/navbar`.\_

3. **Realiza los cambios**

   - Modifica, agrega o elimina código según la funcionalidad o corrección que estés realizando.

4. **Confirma los cambios**

   ```bash
   git add .
   git commit -m "Mensaje descriptivo del cambio"
   ```

   _Guarda los cambios realizados en tu rama local con un mensaje que describa lo que has hecho._

5. **Sube la rama al repositorio remoto**

   ```bash
   git push origin nombre-de-la-rama
   ```

   _Envía los cambios de tu rama local al repositorio remoto (GitHub, GitLab, etc.)._

**2. Pull requests**

- Cuando la funcionalidad esté completa, crea un pull request a la rama principal (`main`).

### Cómo hacer un pull request

1. **Ve a la página de tu repositorio en GitHub.** (o la plataforma que uses)

2. **Haz clic en la pestaña "Pull requests".**

3. **Haz clic en el botón "New pull request".**

4. **Selecciona la rama que quieres fusionar (`nombre-de-la-rama`) y la rama principal (`main`).**

5. **Escribe un título y una descripción clara para el pull request.** Describe los cambios que has realizado.

   - Esto ayudará al revisor a entender el propósito de tus cambios.

6. **Asigna el pull request a revisar.**

7. **Haz clic en el botón "Create pull request".**
   - Se enviara una notificación para que se pueda revisar el código y aprobar la fusión o solicitar cambios.

## Patron de diseño a utilizar (feature-based)

```
└── 📁src
    └── 📁assets         # Archivos estáticos como imágenes
    └── 📁components     # Componentes compartidos o reutilizables
    └── 📁utils          # Funciones utilitarias
    └── 📁views          # Vistas de la aplicación
        └── 📁Home       # Carpeta de la vista Home
            └── 📁components # Componentes específicos de Home
            └── Home.jsx     # Componente principal de Home
            └── home.module.css # Estilos de Home en CSS modular
    └── index.css        # Estilos globales
    └── main.jsx         # Punto de entrada principal de React
    └── routes.jsx       # Definición de rutas de la aplicación
    └── store.js         # Configuración del estado global con Zustand

```

### Convenciones de nomenclatura

- Carpetas: camelCase (e.g., userProfile)
- Componentes: PascalCase (e.g., UserProfile)
- Archivos CSS: camelCase (e.g., userProfile.css)

### Componentes

- Presentational components: Encargados de la UI, reciben datos a través de props y notifican acciones a través de callbacks.

```JavaScript
// src/components/Button/Button.jsx
import './Button.css';

const Button = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;  

```

- Container components: Manejan la lógica, los datos y el estado. Se conectan al store (Zustand) y pasan los datos a los componentes de presentación.

```JavaScript
// src/features/Home/Home.jsx
import React from 'react';
import { useStore } from '../../store';
import Slide from './components/Slide';
import Aside from './components/Aside';
import './Home.css';

const Home = () => {
  const { username } = useStore();

  return (
    <div className="home">
      <Slide />
      <Aside />
      <p>Bienvenido, {username}!</p>
    </div>
  );
};

export default Home;
```
