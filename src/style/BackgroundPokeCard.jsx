export default function getGradient (type1) {
  const gradients = {
    grass:
      "bg-gradient-to-r from-[#61C695] from-0% via-30%  to-[#102e16] to-100%)",
    fire: "bg-gradient-to-r from-[#a3490d] from-0% to-[#e40202] to-100%)",
    water: "bg-gradient-to-r from-[#1f50c2] from-0% to-[#3986e4] to-100%)",
    bug: "bg-gradient-to-r from-[#a8b820] from-0% to-[#68741e] to-100%)",
    normal: "bg-gradient-to-r from-[#d1d193] from-0% to-[#757551] to-100%)",
    dark: "bg-gradient-to-r from-[#291508] from-0% to-[#092233] to-100%)",
    poison: "bg-gradient-to-r from-[#8459c5] from-0% to-[#994b89] to-100%)",
    electric: "bg-gradient-to-r from-[#f8d030] from-0% to-[#b48d0a] to-100%)",
    ground: "bg-gradient-to-r from-[#d7bc4d] from-0% to-[#8a733e] to-100%)",
    ice: "bg-gradient-to-r from-[#9ce4e4] from-0% to-[#b383f3] to-100%)",
    fairy: "bg-gradient-to-r from-[#ee99ac] from-0% to-[#cccc81] to-100%)",
    steel: "bg-gradient-to-r from-[#b0b0c0] from-0% to-[#5a5a6b] to-100%)",
    fighting: "bg-gradient-to-r from-[#d62424] from-0% to-[#470000] to-100%);",
    psychic: "bg-gradient-to-r from-[#c558f8] from-0% to-[#6b21c0] to-100%)",
    rock: "bg-gradient-to-r from-[#c5a92a] from-0% to-[#585219] to-100%)",
    flying: "bg-gradient-to-r from-[#57a7dd] from-0% to-[#a8a878] to-100%)",
    ghost: "bg-gradient-to-r from-[#864ce2] from-0% to-[#200377] to-100%)",
    dragon: "bg-gradient-to-r from-[#7038f8] from-0% to-[#78f] to-100%)",
  };

  return gradients[type1] || gradients.normal;
};
