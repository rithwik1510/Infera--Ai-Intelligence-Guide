from pathlib import Path
text = Path('apps/web/src/components/comparisons/comparison-experience.tsx').read_text()
start = text.index('entry.value?.toFixed(1)%')
print(repr(text[start:start+80]))
