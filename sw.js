document.addEventListener("DOMContentLoaded", function () {
  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("my-cache").then((cache) => {
        return cache.addAll(["/", "/index.html", "/css/style.css", "/app.js"]);
      })
    );
  });

  self.addEventListener("activate", (event) => {});

  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
});
