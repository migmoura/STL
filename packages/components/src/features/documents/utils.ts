export async function fetchAsArrayBuffer(url: string): Promise<ArrayBuffer> {
  const resp = await fetch(url, { credentials: "same-origin" });
  if (!resp.ok) {
    throw new Error(`Failed to download: ${url}`);
  }
  return resp.arrayBuffer();
}

export function filenameFromPath(path: string): string {
  try {
    const u = new URL(path, window.location.origin);
    return u.pathname.split("/").filter(Boolean).pop() ?? "document";
  } catch {
    return path.split("/").filter(Boolean).pop() ?? "document";
  }
}
