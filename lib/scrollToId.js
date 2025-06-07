export const scrollToId = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // or "auto"
      block: "start", // or "center", "end"
    });
  }
};
