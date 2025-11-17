# Assets Folder

This folder contains static assets for the application.

## Structure

- `images/` - Store image files here (PNG, JPG, SVG, etc.)

## Usage in Vue Components

### Import images:
```vue
<script setup>
import myImage from '@/assets/images/my-image.png'
</script>

<template>
  <img :src="myImage" alt="Description" />
</template>
```

### Or use in CSS:
```css
.background {
  background-image: url('@/assets/images/background.jpg');
}
```

### Direct path (if in public folder):
```vue
<img src="/images/my-image.png" alt="Description" />
```

## Supported Formats

- PNG
- JPG/JPEG
- SVG
- GIF
- WebP

