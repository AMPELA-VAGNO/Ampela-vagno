import ReactGA from "react-ga4";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export function initializeAnalytics() {
  if (!measurementId) {
    return false;
  }

  ReactGA.initialize(measurementId);
  return true;
}

export function trackPageView(path: string) {
  if (!measurementId) {
    return;
  }

  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: document.title,
  });
}
