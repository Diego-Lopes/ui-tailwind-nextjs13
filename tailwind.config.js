/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx", //dizendo onde está o conteúdo da aplicação.
    /** "**" significa qualquer pasta e "*.tsx" qualquer arquivo com
     * estenção .tsx
     */
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
