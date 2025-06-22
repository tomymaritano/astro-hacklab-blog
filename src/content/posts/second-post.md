---
title: "Cómo hacer un blog con Astro y Tailwind"
description: "Guía paso a paso para crear un blog rápido y minimalista utilizando Astro, Tailwind CSS y un poco de magia con imágenes generadas por IA."
date: "2025-06-22"
coverImage: "../../public/image.svg"
---

# Test

¡Bienvenido/a a mi blog! 🎉  
En este post te voy a contar cómo armé mi blog personal usando **Astro** y **Tailwind CSS**, y por qué creo que es la mejor combinación para proyectos minimalistas y rápidos.

## ¿Por qué Astro?
Astro es un *static site generator* que:
- Genera sitios ultra rápidos gracias al rendering parcial.
- Permite usar componentes de React, Svelte, Vue (¡e incluso solo HTML!) solo donde los necesitás.
- Tiene un sistema de *Content Collections* que hace que organizar posts sea facilísimo.

## ¿Y por qué Tailwind?
- Por su estilo **utility-first** que me deja iterar rápido en los diseños.
- Tiene un **ecosistema enorme** de plugins.
- Combinado con `@tailwindcss/typography` le das a los artículos un look profesional sin mucho esfuerzo.

## ✨ Una imagen generada por IA
Cuando quería una imagen para mi cover, usé DALL·E para generar una que encaje con el tema del post. Podés probar algo como:
“Minimalist developer workspace, soft light, laptop on wooden desk, cozy aesthetic”

> Resultado que me encantó y que ves arriba como portada.

## 🧑‍💻 Código
La magia sucede en el archivo `PostGrid.astro` que lista automáticamente los posts:
\`\`\`astro
---
const { posts } = Astro.props;
---
```
<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
  {posts.map((post) => (
    <a href={\`/posts/\${post.slug}\`}>
      <h2>{post.data.title}</h2>
      <p>{post.data.description}</p>
    </a>
  ))}
</div>
```

## 🚀 Próximos pasos
En el futuro quiero:
- Añadir buscador instantáneo.
- Soporte multilenguaje.
- Un RSS feed para que te suscribas.

---

Espero que te sirva este post como punto de partida para tu propio blog con Astro.  
💬 ¿Tenés preguntas? Dejámelas en los comentarios o conectemos por redes.

*¡Nos leemos!*