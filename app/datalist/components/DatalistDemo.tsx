"use client";

import { Document } from "@/components";

export const DatalistDemo = () => {
  return (
    <>
      <Document.Heading2>Demonstração</Document.Heading2>

      <Document.Paragraph>
        Digite nos campos abaixo para ver as sugestões de autocomplete. O
        datalist funciona com diferentes tipos de input.
      </Document.Paragraph>

      <div className="space-y-6 max-w-md">
        <div>
          <label
            htmlFor="framework-demo"
            className="block text-zinc-300 font-medium mb-2"
          >
            Escolha um framework:
          </label>
          <input
            type="text"
            id="framework-demo"
            list="frameworks-demo"
            placeholder="Digite para buscar..."
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <datalist id="frameworks-demo">
            <option value="React" />
            <option value="Vue" />
            <option value="Angular" />
            <option value="Svelte" />
            <option value="Next.js" />
            <option value="Nuxt" />
            <option value="Astro" />
            <option value="Remix" />
            <option value="SolidJS" />
          </datalist>
        </div>

        <div>
          <label
            htmlFor="browser-demo"
            className="block text-zinc-300 font-medium mb-2"
          >
            Escolha um navegador:
          </label>
          <input
            type="text"
            id="browser-demo"
            list="browsers-demo"
            placeholder="Digite para buscar..."
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <datalist id="browsers-demo">
            <option value="Chrome" />
            <option value="Firefox" />
            <option value="Safari" />
            <option value="Edge" />
            <option value="Opera" />
            <option value="Brave" />
          </datalist>
        </div>

        <div>
          <label
            htmlFor="color-demo"
            className="block text-zinc-300 font-medium mb-2"
          >
            Escolha uma cor (com sugestões):
          </label>
          <input
            type="color"
            id="color-demo"
            list="colors-demo"
            className="w-full h-12 bg-zinc-800 border border-zinc-700 rounded-lg cursor-pointer"
          />
          <datalist id="colors-demo">
            <option value="#3B82F6" />
            <option value="#8B5CF6" />
            <option value="#EC4899" />
            <option value="#10B981" />
            <option value="#F59E0B" />
            <option value="#EF4444" />
          </datalist>
        </div>

        <div>
          <label
            htmlFor="range-demo"
            className="block text-zinc-300 font-medium mb-2"
          >
            Escolha um valor (com marcadores):
          </label>
          <input
            type="range"
            id="range-demo"
            list="range-values"
            min="0"
            max="100"
            step="10"
            className="w-full accent-blue-500"
          />
          <datalist id="range-values">
            <option value="0" label="0%" />
            <option value="25" label="25%" />
            <option value="50" label="50%" />
            <option value="75" label="75%" />
            <option value="100" label="100%" />
          </datalist>
        </div>
      </div>
    </>
  );
};

