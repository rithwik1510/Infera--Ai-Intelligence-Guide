type AnalyticsPayload = Record<string, unknown>;

class AnalyticsClient {
  track(event: string, payload?: AnalyticsPayload) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[analytics]", event, payload ?? {});
    }
    // Hook for future analytics provider wiring.
  }

  page(name: string, payload?: AnalyticsPayload) {
    this.track(`page:${name}`, payload);
  }
}

const analyticsInstance = new AnalyticsClient();

export function useAnalytics(): AnalyticsClient {
  return analyticsInstance;
}

export const analytics = analyticsInstance;

