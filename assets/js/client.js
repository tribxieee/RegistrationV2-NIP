function getCurrentClient() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("client");

  if (!slug || !CLIENTS[slug]) {  
    return null;
  }

  return CLIENTS[slug];
}