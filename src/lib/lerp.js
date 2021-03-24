export function lerp(start, end, amount) {
  return start * (1 - amount) + end * amount
}
