window.addEventListener("DOMContentLoaded", () => {
  const char = document.getElementById("char");
  const user = document.getElementById("username");
  const pass = document.getElementById("password");

  pass.addEventListener("focus", () => char.classList.add("cover"));
  pass.addEventListener("blur",  () => char.classList.remove("cover"));
  user.addEventListener("focus", () => char.classList.remove("cover"));
});
