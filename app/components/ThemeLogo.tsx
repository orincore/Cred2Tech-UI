import Image, { type ImageProps } from 'next/image';

const LIGHT_LOGO = '/logos/black-logo.png';
const DARK_LOGO = '/logos/white-logo.png';

type ThemeLogoProps = Omit<ImageProps, 'src' | 'alt' | 'loading' | 'preload' | 'priority'> & {
  alt?: string;
};

/**
 * The Cred2Tech wordmark for the current theme.
 *
 * Both variants are in the markup and CSS (globals.css, keyed on the `dark`
 * class next-themes puts on <html> before first paint) shows the right one.
 * The old approach chose the `src` in JS after mount, which meant:
 *  - the server always sent and preloaded the black logo, so dark-mode
 *    visitors swapped away from it and the preload went unused;
 *  - the footer started on the white logo, invisible on a light background,
 *    until hydration;
 *  - header and footer rendered the same optimized URL, one eager and one
 *    lazy, and Next's LCP check (keyed by URL) blamed the lazy copy.
 *
 * Both images are `eager` on purpose: the hidden one costs a single small
 * request, and the identical URLs used by the header and footer are fetched
 * once. `priority`/`preload` are not used, so no <link rel="preload"> is
 * emitted for an image that may turn out to be the hidden variant.
 */
export default function ThemeLogo({ alt = 'Cred2Tech', className = '', ...rest }: ThemeLogoProps) {
  return (
    <>
      <Image {...rest} src={LIGHT_LOGO} alt={alt} loading="eager" className={`theme-logo--light ${className}`} />
      <Image {...rest} src={DARK_LOGO} alt={alt} loading="eager" className={`theme-logo--dark ${className}`} />
    </>
  );
}
