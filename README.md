# 🌸 En la mente de Lina — Proyecto Next.js

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## Estructura del proyecto

```
/app
  /servicios       → Página de servicios
  /contenido       → Podcast & Videos
  /tienda          → Tienda emocional
  /sobre-lina      → Historia y formación
  /contacto        → Formulario + contacto
  layout.tsx       → Layout raíz (Navbar + Footer)
  page.tsx         → Landing page (inicio)
  globals.css      → Estilos globales + fuentes

/components
  Navbar.tsx       → Menú de navegación
  Footer.tsx       → Pie de página
  /sections        → Secciones de la landing
    HeroSection.tsx
    PresentacionSection.tsx
    ServiciosDestacados.tsx
    ContenidoPreview.tsx
    TiendaPreview.tsx
    Testimonios.tsx
    CTAFinal.tsx

/public
  favicon.svg      → Ícono gardenia
```

## Personalización

### 1. Información de contacto
Busca y reemplaza en todos los archivos:
- `573000000000` → Tu número de WhatsApp con código de país (sin +)
- `hola@enlamentedelina.com` → Tu email real
- `@enlamentedelina` → Tu usuario de Instagram

### 2. Fotos
Reemplaza los placeholders emoji por imágenes reales usando Next.js `<Image>`:
```tsx
import Image from 'next/image'

// Reemplazar el div placeholder por:
<Image
  src="/images/lina-foto.jpg"
  alt="Lina, psicóloga"
  width={400}
  height={400}
  className="rounded-[40%_60%_60%_40%/40%_40%_60%_60%] object-cover"
/>
```

### 3. Podcast & Videos
En `/app/contenido/page.tsx`:
- `spotifyId`: Reemplaza con el ID del episodio de Spotify
- `youtubeId`: Reemplaza con el ID del video de YouTube

### 4. Formulario de contacto
En `/app/contacto/page.tsx`, el formulario simula el envío.
Para envío real usa una de estas opciones:
- **Formspree**: `https://formspree.io`
- **EmailJS**: `https://emailjs.com`
- **Resend**: `https://resend.com`

### 5. Tienda
Para pagos reales, integra:
- **WhatsApp** (ya configurado) → Para pedidos simples
- **Wompi** → Pasarela de pago colombiana
- **MercadoPago** → Disponible en Colombia

## Paleta de colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Rosa principal | `#E8AFAF` | Elementos suaves |
| Rosa acento | `#D97B7B` | Botones, CTAs |
| Café | `#5A3E36` | Texto principal |
| Verde | `#7A9E7E` | Acentos naturales |
| Verde claro | `#DCE8DE` | Fondos suaves |
| Beige | `#F5E9E2` | Armonía |
| Crema | `#FAF6F3` | Fondo principal |

## Fuentes
- **Cormorant Garamond** → Títulos (display)
- **DM Sans** → Texto corrido (body)
- **Lora** → Citas y acentos (accent)

## Despliegue

### Vercel (recomendado — gratis)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

## Próximos pasos sugeridos
- [ ] Agregar fotos reales de Lina
- [ ] Configurar dominio personalizado
- [ ] Integrar Google Analytics
- [ ] Conectar formulario a EmailJS o Formspree
- [ ] Agregar IDs reales de YouTube y Spotify
- [ ] Crear blog/artículos con un CMS (Sanity.io)
