/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"  // <- inclut tes fichiers SCSS si tu écris des classes dedans
  ],
  theme: {
    extend: {},                  // ici tu peux ajouter des couleurs, polices, etc.
  },
  plugins: [],
}
