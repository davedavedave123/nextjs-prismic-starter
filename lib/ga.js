// Set up google analytics following these steps https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/

export const pageView = url => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
