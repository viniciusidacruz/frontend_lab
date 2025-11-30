export const DATALIST_CHARACTERISTICS = [
  {
    title: "Autocomplete nativo",
    description:
      "Sugestões aparecem automaticamente conforme o usuário digita",
  },
  {
    title: "Sem dependências",
    description:
      "Funciona sem bibliotecas externas, apenas com HTML puro",
  },
  {
    title: "Acessibilidade integrada",
    description:
      "Suporte nativo a leitores de tela e navegação por teclado",
  },
  {
    title: "Filtragem automática",
    description:
      "O navegador filtra as opções baseado no que o usuário digita",
  },
];

export const DATALIST_ATTRIBUTES = [
  {
    title: "list",
    description:
      "Atributo do input que referencia o id do datalist para conectá-los",
  },
  {
    title: "id",
    description:
      "Identificador único do datalist que será referenciado pelo input",
  },
];

export const DATALIST_CODE_REACT = `export default function AutocompleteExample() {
  return (
    <div>
      <label htmlFor="framework">Escolha um framework:</label>
      
      <input 
        type="text" 
        id="framework" 
        list="frameworks" 
        placeholder="Digite para buscar..."
      />
      
      <datalist id="frameworks">
        <option value="React" />
        <option value="Vue" />
        <option value="Angular" />
        <option value="Svelte" />
        <option value="Next.js" />
        <option value="Nuxt" />
        <option value="Astro" />
      </datalist>
    </div>
  );
}`;

export const DATALIST_CODE_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Datalist HTML Nativo</title>
  <style>
    .form-group {
      margin-bottom: 16px;
    }

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
    }

    input {
      width: 100%;
      max-width: 300px;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
    }

    input:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
  </style>
</head>
<body>
  <div class="form-group">
    <label for="framework">Escolha um framework:</label>
    
    <input 
      type="text" 
      id="framework" 
      list="frameworks" 
      placeholder="Digite para buscar..."
    />
    
    <datalist id="frameworks">
      <option value="React">
      <option value="Vue">
      <option value="Angular">
      <option value="Svelte">
      <option value="Next.js">
      <option value="Nuxt">
      <option value="Astro">
    </datalist>
  </div>

  <div class="form-group">
    <label for="color">Escolha uma cor:</label>
    
    <input 
      type="color" 
      id="color" 
      list="colors"
    />
    
    <datalist id="colors">
      <option value="#3B82F6">
      <option value="#8B5CF6">
      <option value="#EC4899">
      <option value="#10B981">
      <option value="#F59E0B">
    </datalist>
  </div>
</body>
</html>`;

