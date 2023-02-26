# Vaccine inventory

---

### Tecnologías

- [Vite](https://vitejs.dev)
- [React v18.x](https://reactjs.org)
- [MUI v5.x](https://mui.com)
- [Zustang v4.x](https://github.com/)

### Configuración

- variables de entorno:

⚠️PD: los valores para pruebas serán incluidos en el correo.

crear un copia del archivo .env.example y agregar los valores requeridos (en el
correo enviado)

```js
VITE_SUPABASE_PROJECT_URL=
VITE_SUPABASE_ANON_KEY=
```

### Comandos para ejecutar el proyecto

```js
pnpm install
pnpm run dev
```

---

### Descripción

El proyecto fue construido usando como backend [supabase](https://supabase.com/)
(me costo tiempo valioso la integración). Para el control de los estados
globales utilicé [Zustang v4.x](https://github.com/), para los estilos me apoyen
[MUI v5.x](https://mui.com) y las rutas de la app con react-router-dom.

EL esquema de las carpetas esta basado el patron atomic design y composición de
componentes. Adicionalmente use custom hooks para intentar mantener los
componentes lo mas organizado posible.

### Features terminadas: Administrador

✅ backend (tablas e integración necesaria para las features terminadas)  
✅ eliminar empleados (solo se pueden agregar desde supabase)  
✅ listar todos los empleados.  
✅ login con inputs validados.

### Features incompletas pero incluidas en la app: Administrador

- Formulario para el registro de nuevos empleados (todos los inputs tiene
  validaciones, please ver el código)
- Formulario para editar nuevos empleados (igual)

### Features requeridas pero no disponible:

- filtros
- panel para empleados

---

### Adicional...

El que mucho abarca poco aprieta... 😅  
Exactamente me paso esto. Planee una integración con supabase (para sorprender)
y dicha implementación me tomo mas tiempo de lo que debí dedicar al back. Al
final tuve que tomar medidas desesperadas (dejas las queries sin autenticación)
para poder avanzar en los aspectos requeridos. Disfrute el proceso, aprendí
muchas cosas. Creo que a nivel de flujo falta features básicas, pero si miramos
el código hay una idea clara de mi nivel y la calidad del código. Creo que
seguiré terminando los flujos básicos posteriormente.

# GRACIAS!
