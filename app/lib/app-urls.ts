/**
 * Login/signup lives on the separate app subdomain — this marketing site has
 * no /login route of its own. Always link to these instead of a local path.
 */
const APP_BASE_URL = 'https://app.cred2tech.com';

export const APP_URLS = {
  home: APP_BASE_URL,
  partnerLogin: `${APP_BASE_URL}/login`,
  msmeLogin: `${APP_BASE_URL}/msme/login`,
} as const;
