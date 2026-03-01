# Trabajo-Integrador-Final---Leandro-Videira---SkyChat
SkyChat - Aplicación de Mensajes

## 📱 Descripción del Proyecto

**SkyChat** 
Para crear skychat use react y react router. 
Es una aplicacion de chats, grupos etc.

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
  - Favoritos
  - Grupos

- **Diseño Responsivo**: Soporta desde 320px hasta 2000px
  - Desktop optimizado (1025px+)
  - Tablet adaptado (769px - 1024px)
  - Modal inteligente para ProfilePanel (≤1020px)
  - Mobile drawer para ChatList (≤768px)

- **Sistema de Autenticación**: En la pantalla del login (para logearte necesitas ingresar tu mail) se hizo uno codigo para validar que esea un mail de lo contrario dira un alerta que no es un mail.

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

Algunas de los boton son NO FUNCINALES:
- Todo lo que esta dentro de grupos, notificaciones, ajustes. 
- Botones de attachment y microfono.
- Mensajes a destacar y/o enviar archivos multimedia y que se vean en el profile panel de cada chat. 
- Boton de register, forgot password.


## 🔄 Flujo de Datos

```
App.jsx (Estado global)
  ├→ Navbar (Navegación)
  ├→ ChatList (Visualización de chats con filtros)
  ├→ ChatWindow (Conversación actual)
  ├→ ProfilePanel (Info del contacto/grupo)
  └→ LoginScreen (Autenticación)
```

## 👨‍💻 Autor

**Leandro Videira** - Trabajo Integrador Final