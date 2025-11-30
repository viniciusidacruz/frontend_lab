export const PICTURE_CHARACTERISTICS = [
  {
    title: "Imagens responsivas",
    description:
      "Carrega diferentes imagens baseado no tamanho da tela ou resolução",
  },
  {
    title: "Formatos modernos",
    description:
      "Permite usar WebP ou AVIF com fallback para navegadores antigos",
  },
  {
    title: "Art direction",
    description:
      "Exibe imagens diferentes (não apenas tamanhos) para diferentes dispositivos",
  },
  {
    title: "Performance",
    description:
      "O navegador escolhe a melhor imagem antes de fazer o download",
  },
];

export const PICTURE_ELEMENTS = [
  {
    title: "<source>",
    description:
      "Define condições (media queries, tipo de arquivo) e a imagem correspondente",
  },
  {
    title: "<img>",
    description:
      "Elemento obrigatório que serve como fallback e define o alt text",
  },
];

export const PICTURE_CODE_REACT = `export default function ResponsiveImageExample() {
  return (
    <picture>
      {/* Formato moderno WebP */}
      <source 
        srcSet="/imagem.webp" 
        type="image/webp" 
      />
      
      {/* Telas grandes */}
      <source 
        srcSet="/imagem-desktop.jpg" 
        media="(min-width: 1024px)" 
      />
      
      {/* Telas médias */}
      <source 
        srcSet="/imagem-tablet.jpg" 
        media="(min-width: 768px)" 
      />
      
      {/* Fallback para mobile e navegadores antigos */}
      <img 
        src="/imagem-mobile.jpg" 
        alt="Descrição da imagem"
        loading="lazy"
      />
    </picture>
  );
}`;

export const PICTURE_CODE_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Picture HTML Nativo</title>
  <style>
    .image-container {
      max-width: 800px;
      margin: 0 auto;
    }

    picture img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .info {
      margin-top: 16px;
      padding: 12px;
      background: #f0f0f0;
      border-radius: 8px;
      font-size: 14px;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="image-container">
    <picture>
      <!-- Formato moderno WebP -->
      <source 
        srcset="imagem.webp" 
        type="image/webp"
      >
      
      <!-- Telas grandes (desktop) -->
      <source 
        srcset="imagem-desktop.jpg" 
        media="(min-width: 1024px)"
      >
      
      <!-- Telas médias (tablet) -->
      <source 
        srcset="imagem-tablet.jpg" 
        media="(min-width: 768px)"
      >
      
      <!-- Fallback para mobile e navegadores antigos -->
      <img 
        src="imagem-mobile.jpg" 
        alt="Descrição da imagem"
        loading="lazy"
      >
    </picture>

    <p class="info">
      Redimensione a janela para ver diferentes imagens carregando.
      O navegador escolhe automaticamente a melhor opção.
    </p>
  </div>
</body>
</html>`;

