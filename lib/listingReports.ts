export const REPORT_REASONS = [
  { value: 'incorrect', label: 'The details are wrong' },
  { value: 'remove', label: 'Please remove this listing' },
  { value: 'not_a_pest_controller', label: 'This is not a pest control business' },
  { value: 'other', label: 'Something else' },
] as const;

export const REPORT_REASON_VALUES = new Set<string>(REPORT_REASONS.map((reason) => reason.value));
