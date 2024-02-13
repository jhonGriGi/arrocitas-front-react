# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Colors

#E0A526 -- Amarillo para acciones activas y texto en background principal
#1c1c1c -- Color de texto para botones y background principal

## Texto en home

### titulo

Tu Elección Saludable y Deliciosa

### subtitulo

El snack perfecto

### parrafo

En el auge de los snacks saludables, Arrocitas es la opción distintiva para quienes valoran el bienestar sin sacrificar el placer. Perfectas para cualquier ocasión, desde tu rutina diaria hasta para la lonchera de tu hijo. Estas delicias crujientes acompañarán tus momentos con un sabor inigualable. ¡Descubre la magia de cuidarte mientras disfrutas cada bocado! 🌿✨

### Boton

VER PRODUCTO

### Texto antes del footer

¡Los invito a enamorarse de Arrocitas, porque una vez lo hagan, no podrán parar de comer! 😋

### footer

### REDES

{imagen facebook} - {imagen instagram}
Delicioso snack horneado glutenfree

### copyright

Copyright 2023 All Right Reserved By Arrocitas

### Contenido acerca del producto

🌾 Libre de Gluten:

Creo firmemente que todos deberíamos disfrutar de un snack delicioso, independientemente de las restricciones dietéticas. Es por eso que Arrocitas son completamente libres de gluten, para que puedas deleitarte sin preocupaciones.

{imagen frontal}

🔥 Horneadas con Amor:

Renunciamos a las frituras, optando por el calor del horno para lograr la textura ideal: crujiente por fuera y por dentro. Descubre el arte de los snacks SIN ACEITE, donde el sabor y la salud se encuentran en cada crujido.

{imagen de atras}

### Reseñas

Qué dice mi cliente...

{lista de tarjetas con las opiniones}

### Acerca de mi

Soy una mujer emprendedora, mi historia comienza con el desarrollo de Arrocitas. Un snack horneado y libre de gluten, inspiradas en la búsqueda constante de sabores únicos y opciones más saludables.Con Arrocitas, no solo ofrezco un snack; ofrezco una experiencia de sabor única, nutritiva y llena de alegría. Mi sueño es llevar esta delicia a todos los rincones del país, para que todos podamos disfrutar de la magia de cuidarnos sin renunciar al placer.

{en negrilla}
¡GRACIAS POR SER PARTE DE ESTA CRUJIENTE AVENTURA!

### contacto

...

{facebook: https://www.facebook.com/arrocitasglutenfree?mibextid=ZbWKwL&_rdc=2&_rdr}
{instagram: https://www.instagram.com/arrocitas.glutenfree/}
