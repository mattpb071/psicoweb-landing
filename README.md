# PsicoWeb Costa Rica - Landing Page

Esta es la landing page oficial de **PsicoWeb Costa Rica**, una plataforma moderna para la gestión de recursos humanos y pruebas psicométricas.

## 🚀 Tecnologías
- **React 19**
- **Tailwind CSS** (Diseño responsivo y moderno)
- **Lucide React** (Iconografía)
- **Firebase Hosting** (Despliegue)

## 📋 Características
- Diseño minimalista y profesional basado en la identidad de marca.
- Catálogo interactivo de más de 28 pruebas psicométricas.
- Formulario de contacto integrado con **Antigravity** (Webhooks).
- Optimización para dispositivos móviles.

## 🛠️ Instalación y Uso Local
1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Corre el servidor de desarrollo: `npm run dev`

## 🔥 Despliegue en Firebase

Prerrequisitos: Tener cuenta en Firebase y `firebase-tools` instalado (`npm install -g firebase-tools`).

1. **Construir el proyecto:**
   ```bash
   npm run build
   ```
   (Esto crea la carpeta `dist` configurada en `firebase.json`).

2. **Login y conexión:**
   ```bash
   firebase login
   firebase init hosting
   ```
   *Nota: Si te pregunta, no sobreescribas `index.html`.*

3. **Subir a internet:**
   ```bash
   firebase deploy
   ```

---
© 2025 PsicoWeb Costa Rica. Todos los derechos reservados.