export const ageYearsArray = [
    ...Array.from({ length: 12 }, (_, i) => ({
        label: (i + 1).toString() + ' mth',
        value: (i + 1).toString() + ' mth',
      })),
    ...Array.from({ length: 30 }, (_, i) => ({
      label: (i + 1).toString() + ' yr',
      value: (i + 1).toString() + ' yr',
    })),
  ];