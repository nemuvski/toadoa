export const Breakpoint = {
  XS_MAX: 539,
  S_MIN: 540,
  S_MAX: 767,
  M_MIN: 768,
  M_MAX: 991,
  L_MIN: 992,
  L_MAX: 1311,
} as const
export type BreakpointType = typeof Breakpoint[keyof typeof Breakpoint]

export const bp = (point: BreakpointType, isMinWidth = true) => {
  const query = isMinWidth ? 'min-width' : 'max-width'
  return `@media (${query}: ${point}px)`
}
