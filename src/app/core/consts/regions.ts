// export const regions = {
//   'africa':'Africa',
//   'americas':'Americas',
//   'asia':'Asia',
//   'europe':'Europe',
//   'oceania':'Oceania',
// } as const;

export const regions = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
] as const;

export type Regions = (typeof regions)[number];
