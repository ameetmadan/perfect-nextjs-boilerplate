/**
 * Custom error class for fetch requests
 */
export class FetchError extends Error {
    constructor(
        public status: number,
        public statusText: string,
        public data: any
    ) {
        super(`Error ${status}: ${statusText}`);
    }
}

/**
 * A standard, generic wrapper around native `fetch` with error throwing out of the box.
 * Ideal for both Server Components and Client Components (via React Query).
 */
export async function fetcher<T = any>(
    url: string | URL,
    options?: RequestInit
): Promise<T> {
    const res = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
    });

    if (!res.ok) {
        let errorData;
        try {
            errorData = await res.json();
        } catch {
            errorData = await res.text();
        }
        throw new FetchError(res.status, res.statusText, errorData);
    }

    // Not all successful responses have JSON
    if (res.status === 204) return null as unknown as T;

    return res.json();
}
