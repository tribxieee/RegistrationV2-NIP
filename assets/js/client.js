function getCurrentClient() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("client");

  if (!slug || !CLIENTS[slug]) {
    window.location.href = "404.html";
    return null;
  }

  return CLIENTS[slug];
}
