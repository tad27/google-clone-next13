export const mapSlugFromSearchTerm = (searchTerm) =>
  searchTerm.toLowerCase().split(" ").join("+");
