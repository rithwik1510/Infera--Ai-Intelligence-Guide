
// This file will contain the API calls to the backend for authentication.

export interface AuthTokenResponse {
  accessToken: string;
  tokenType: string;
}

export interface AuthUser {
  id: number;
  email: string;
  isActive: boolean;
}

function resolveApiBaseUrl(): string {
  if (typeof window !== "undefined") {
    const clientUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!clientUrl) {
      throw new Error("NEXT_PUBLIC_API_URL must be set before using authentication APIs.");
    }
    return clientUrl;
  }

  const serverUrl =
    process.env.AI_HELPER_API_URL ??
    process.env.NEXT_PUBLIC_API_URL ??
    process.env.API_BASE_URL;

  if (!serverUrl) {
    throw new Error("Configure AI_HELPER_API_URL (or NEXT_PUBLIC_API_URL) to use authentication APIs.");
  }

  return serverUrl;
}

async function assertOk(response: Response, fallbackMessage: string): Promise<Response> {
  if (response.ok) {
    return response;
  }

  // Attempt to surface API-provided detail before using the fallback copy.
  try {
    const payload = await response.json();
    const detail =
      typeof payload === "object" && payload !== null && "detail" in payload
        ? String(payload.detail)
        : null;
    throw new Error(detail ?? fallbackMessage);
  } catch {
    throw new Error(fallbackMessage);
  }
}

export async function login(email: string, password: string): Promise<AuthTokenResponse> {
  const apiBaseUrl = resolveApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/auth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      username: email,
      password,
    }),
  });

  const safeResponse = await assertOk(response, "Failed to login");
  const payload = (await safeResponse.json()) as AuthTokenResponse;
  return payload;
}

export async function register(email: string, password: string): Promise<AuthUser> {
  const apiBaseUrl = resolveApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const safeResponse = await assertOk(response, "Failed to register");
  const payload = (await safeResponse.json()) as AuthUser;
  return payload;
}

export async function getMe(token: string): Promise<AuthUser> {
  const apiBaseUrl = resolveApiBaseUrl();
  const response = await fetch(`${apiBaseUrl}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const safeResponse = await assertOk(response, "Failed to fetch user profile");
  const payload = (await safeResponse.json()) as AuthUser;
  return payload;
}
