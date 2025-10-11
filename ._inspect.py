from pathlib import Path
text = Path('apps/web/src/components/comparisons/comparison-experience.tsx').read_text()
start = text.index('rawScore')
print(repr(text[start:start+120]))
