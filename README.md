# SkyChat - Aplicación de Mensajería en Tiempo Real

## 📱 Descripción del Proyecto

**SkyChat** es una aplicación web moderna de mensajería instantánea construida con **React** y **React Router**. Permite a los usuarios comunicarse con contactos individuales y participar en chats grupales, con un diseño totalmente responsivo y una interfaz atractiva basada en glassmorphism.

### ✨ Características Principales

- **Chats Individuales**: Conversaciones privadas con contactos
- **Chats Grupales**: Comunicación en grupo con múltiples miembros
- **Panel de Perfil Inteligente**: 
  - Información del contacto o grupo
  - Miembros del grupo
  - Mensajes destacados
  - Multimedia compartida
  - Archivos y documentos
  - Estados de usuarios
  
- **Filtros de Búsqueda**:
  - Todos los chats
  - No leídos
  - Favoritos
  - Grupos

- **Diseño Responsivo**: Soporta desde 320px hasta 2000px
  - Desktop optimizado (1025px+)
  - Tablet adaptado (769px - 1024px)
  - Modal inteligente para ProfilePanel (≤1020px)
  - Mobile drawer para ChatList (≤768px)

- **Interfaz Moderna**:
  - Glassmorphism (efecto blur y transparencia)
  - Animaciones suaves (fadeIn, slideUp, slideDown)
  - Tema oscuro predeterminado
  - Íconos e indicadores visuales

- **Sistema de Autenticación**: Pantalla de login con navegación protegida

## 🛠️ Librerías y Tecnologías Utilizadas

### Dependencias Principales

| Librería | Versión | Descripción |
|----------|---------|------------|
| **React** | ^19.2.0 | Librería frontend para interfaces UI |
| **React DOM** | ^19.2.0 | Renderizado de componentes React en el DOM |
| **React Router** | ^7.13.0 | Enrutamiento cliente-side y navegación |

### Herramientas de Desarrollo

| Herramienta | Versión | Descripción |
|-------------|---------|------------|
| **Vite** | ^7.3.1 | Build tool ultrarrápido |
| **ESLint** | ^9.39.1 | Linter para código JavaScript |
| **@vitejs/plugin-react** | ^5.1.1 | Plugin React para Vite |
| **TypeScript Types** | ^19.2.x | Tipos para React y React DOM |

## 📁 Estructura del Proyecto

```
src/
├── Components/
│   ├── ChatList.jsx          # Lista de chats con filtros
│   ├── ChatList.css
│   ├── ChatWindow.jsx        # Ventana de chat principal
│   ├── ChatWindow.css
│   ├── Navbar.jsx            # Barra de navegación superior
│   ├── Navbar.css
│   ├── ProfilePanel.jsx      # Panel de información del contacto
│   ├── ProfilePanel.css
│   └── ContactSidebar.jsx    # Sidebar de contactos
│
├── Context/
│   └── ContactsContext.jsx   # Context API para estado global
│
├── data/
│   └── ContactData.js        # Datos de contactos y grupos
│
├── Screens/
│   ├── LoginScreen/
│   ├── HomeScreen/
│   ├── ContactScreen/
│   └── ErrorNotFoundScreen/
│
├── services/
│   └── contactsService.js    # Servicio de contactos
│
├── App.jsx                   # Componente raíz
├── App.css                   # Estilos globales
├── main.jsx                  # Punto de entrada
└── index.html
```

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd "Proyecto final - Leandro Videira"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Compilar para producción**
```bash
npm run build
```

5. **Previsualizar compilación de producción**
```bash
npm run preview
```

## 📊 Características Técnicas

### Responsividad

- **Breakpoints implementados**:
  - 320px - 480px (Mobile)
  - 481px - 768px (Tablet pequeño)
  - 769px - 1024px (Tablet)
  - 1025px - 1440px (Desktop)
  - 1441px - 1999px (Desktop grande)
  - 2000px+ (Ultra HD)

### State Management
- **React Context API** para gestión de estado global
- **useState** para componentes locales

### Routing
- **React Router v7** para navegación cliente-side
- Rutas protegidas
- Parámetros dinámicos para IDs de contacto/grupo

### Estilos
- **CSS3 vanilla** sin frameworks adicionales
- Glassmorphism con `backdrop-filter`
- Gradientes lineales personalizados
- Animaciones CSS keyframe

### Componentes Principales

| Componente | Funcionalidad |
|-----------|---------------|
| **ChatList** | Visualiza chats con filtros (Todos, No leídos, Favoritos, Grupos) |
| **ChatWindow** | Renderiza conversación seleccionada |
| **ProfilePanel** | Muestra información del contacto/grupo con tabs |
| **Navbar** | Navegación superior con opciones de usuario |
| **LoginScreen** | Autenticación inicial |

## 🎨 Diseño y UX

- **Interfaz minimalista** con foco en usabilidad
- **Transiciones suaves** entre estados
- **Feedback visual** inmediato en interacciones
- **Modo oscuro** por defecto para reducir fatiga visual
- **Iconografía clara** con SVG inline

## 🔐 Autenticación

- Pantalla de login requerida
- Navegación protegida a ruta `/chat`
- Logout disponible en ProfilePanel
- Redirección automática a login en sesión expirada

## 📝 Datos de Ejemplo

El proyecto incluye datos precargados:

- **6 contactos individuales**: Homero, Cletus, Milhouse, Jefe Gorgory, Barney Gumble, Otto
- **1 grupo**: "Amigos del Bar" con conversación sobre ver el Superbowl
- **Mensajes**: Conversaciones de ejemplocon timestamps
- **Estados**: Videos de estado para cada contacto
- **Información**: Última conexión, número de miembros, etc.

## 🐛 Scripts Disponibles

```bash
npm run dev       # Inicia servidor de desarrollo
npm run build     # Compila para producción
npm run lint      # Ejecuta ESLint
npm run preview   # Previsualiza build de producción
```

## 📦 Dependencias Adicionales (Global)

El proyecto utiliza características nativas del navegador:
- **LocalStorage** (opcional para persistencia)
- **Fetch API** (para futuras integraciones)
- **CSS Grid y Flexbox** para layouts

## 🔄 Flujo de Datos

```
App.jsx (Estado global)
  ├→ Navbar (Navegación)
  ├→ ChatList (Visualización de chats con filtros)
  ├→ ChatWindow (Conversación actual)
  ├→ ProfilePanel (Info del contacto/grupo)
  └→ LoginScreen (Autenticación)
```

## 🎯 Próximas Mejoras

- [ ] Integración con API backend
- [ ] Persistencia de datos en base de datos
- [ ] Notificaciones push
- [ ] Llamadas de voz/video
- [ ] Compartir archivos
- [ ] Emojis y reacciones
- [ ] Tipeo en tiempo real
- [ ] Encriptación de mensajes

## 👨‍💻 Autor

**Leandro Videira** - Trabajo Integrador Final

## 📄 Licencia

Este proyecto es de código educativo y libre para usar con fines de aprendizaje.

---

**Última actualización**: Marzo 2026