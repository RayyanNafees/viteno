import { defineConfig } from 'npm:vite';
import react from 'npm:@vitejs/plugin-react';
import viteDeno from 'https://deno.land/x/vite_deno_plugin/mod.ts';

export default defineConfig({
  plugins: [
    viteDeno({
      importMapFilename: './deno.json',
    }),
    react({
      jsxImportSource: 'react',
    })
  ],
});
