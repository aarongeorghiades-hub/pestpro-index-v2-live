// Stable for a UTC day, different the next day. Same inputs always produce
// the same order, so a refresh does not reshuffle the featured box.

function hashString(value: string): number {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function utcDayStamp(now = new Date()): string {
  return now.toISOString().slice(0, 10);
}

export function dailyShuffle<T>(items: readonly T[], salt: string, now = new Date()): T[] {
  const copy = items.slice();
  let seed = hashString(`${utcDayStamp(now)}:${salt}`);
  for (let i = copy.length - 1; i > 0; i--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    const swap = copy[i];
    copy[i] = copy[j];
    copy[j] = swap;
  }
  return copy;
}
