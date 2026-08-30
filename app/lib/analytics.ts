declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | undefined>
) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, params);
}

export function trackOrderOnlineClick(buttonLocation: string) {
  trackEvent("order_online_click", {
    page_path: window.location.pathname,
    button_location: buttonLocation,
  });
}

export function trackMenuItemOrderClick(
  menuItem: string,
  menuCategory: string
) {
  trackEvent("menu_item_order_click", {
    page_path: window.location.pathname,
    menu_item: menuItem,
    menu_category: menuCategory,
  });
}

export function trackBookTableClick(buttonLocation: string) {
  trackEvent("book_table_click", {
    page_path: window.location.pathname,
    button_location: buttonLocation,
  });
}

export function trackPhoneClick() {
  trackEvent("phone_click", {
    page_path: window.location.pathname,
  });
}

export function trackDirectionsClick() {
  trackEvent("directions_click", {
    page_path: window.location.pathname,
  });
}

export function trackGroupEnquiryClick(formLocation: string) {
  trackEvent("group_enquiry_click", {
    page_path: window.location.pathname,
    form_location: formLocation,
  });
}

export function trackMenuView() {
  trackEvent("menu_view", {
    page_path: window.location.pathname,
  });
}

export function trackStockistClick() {
  trackEvent("stockist_click", {
    page_path: window.location.pathname,
  });
}

export function trackContactSubmission() {
  trackEvent("contact_submission", {
    page_path: window.location.pathname,
  });
}
