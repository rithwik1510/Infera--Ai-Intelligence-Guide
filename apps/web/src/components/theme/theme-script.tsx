export function ThemeScript() {
  const script = `(() => {
    try {
      const key = 'infera-theme';
      const stored = localStorage.getItem(key);
      const mode = stored === 'light' || stored === 'dark' ? stored : 'dark';
      document.body.dataset.theme = mode;
    } catch (error) {
      document.body.dataset.theme = 'dark';
    }
  })();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
