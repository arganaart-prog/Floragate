const baseUrl = import.meta.env.BASE_URL || '/';

export function withBase(path: string): string {
  if (!path) return baseUrl;
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('mailto:') || path.startsWith('tel:') || path.startsWith('#')) {
    return path;
  }

  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  if (path === '/') return base;

  return `${base}${path.replace(/^\/+/, '')}`;
}

export function stripBase(pathname: string): string {
  const base = baseUrl.replace(/\/$/, '');
  if (!base || base === '/') return pathname || '/';

  if (pathname === base) return '/';
  if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length) || '/';

  return pathname || '/';
}
