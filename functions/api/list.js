export async function onRequest(context) {
  // Forward the request to your existing Worker endpoint
  const targetBase = "https://oulu-cam-archive.harri-vaarala.workers.dev";
  const url = new URL(context.request.url);

  const target = new URL(targetBase + "/api/list");
  // copy query params
  url.searchParams.forEach((v, k) => target.searchParams.set(k, v));

  return fetch(target.toString(), {
    method: "GET",
    headers: context.request.headers,
  });
}
