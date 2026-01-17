import { useState, useEffect } from 'react';

export function LanguageSwitcher() {
  const [currentPath, setCurrentPath] = useState('');
  const [isSpanish, setIsSpanish] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setIsSpanish(window.location.pathname.startsWith('/es'));
  }, []);

  const toggleUrl = isSpanish
    ? currentPath.replace('/es', '') || '/'
    : `/es${currentPath}`;

  return (
    <div className="flex items-center gap-2 text-sm">
      <a
        href={isSpanish ? currentPath.replace('/es', '') || '/' : currentPath}
        className={`hover:text-primary transition-colors ${!isSpanish ? 'font-bold text-primary' : 'text-muted-foreground'}`}
        aria-label="Switch to English"
        aria-current={!isSpanish ? 'page' : undefined}
        lang="en"
      >
        EN
      </a>
      <span className="text-muted-foreground" aria-hidden="true">/</span>
      <a
        href={toggleUrl}
        className={`hover:text-primary transition-colors ${isSpanish ? 'font-bold text-primary' : 'text-muted-foreground'}`}
        aria-label="Cambiar a Español"
        aria-current={isSpanish ? 'page' : undefined}
        lang="es"
      >
        ES
      </a>
    </div>
  );
}
