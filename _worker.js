export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      // Handle API routes
      return handleApiRequest(request, env, ctx);
    }

    // Serve static assets and pages
    return env.ASSETS.fetch(request);
  },
};

async function handleApiRequest(request, env, ctx) {
  // Your API logic here
  const url = new URL(request.url);

  // Example API route handling
  if (url.pathname === "/api/hello") {
    return new Response(JSON.stringify({ message: "Hello World" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Not Found", { status: 404 });
}
