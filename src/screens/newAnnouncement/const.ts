export const speciesArray = [
  {label: 'Dog', value: 'Dog'},
  {label: 'Cat', value: 'Cat'},
  {label: 'Rabbit', value: 'Rabbit'},
  {label: 'Hamster', value: 'Hamster'},
  {label: 'Guinea Pig', value: 'Guinea Pig'},
  {label: 'Parrot', value: 'Parrot'},
  {label: 'Canary', value: 'Canary'},
  {label: 'Fish', value: 'Fish'},
  {label: 'Turtle', value: 'Turtle'},
  {label: 'Snake', value: 'Snake'},
  {label: 'Lizard', value: 'Lizard'},
  {label: 'Ferret', value: 'Ferret'},
  {label: 'Chinchilla', value: 'Chinchilla'},
  {label: 'Hedgehog', value: 'Hedgehog'},
  {label: 'Frog', value: 'Frog'},
  {label: 'Spider', value: 'Spider'},
  {label: 'Crab', value: 'Crab'},
  {label: 'Pigeon', value: 'Pigeon'},
  {label: 'Mouse', value: 'Mouse'},
  {label: 'Rat', value: 'Rat'},
];

export const ageYearsArray = Array.from({length: 30}, (_, i) => ({
  label: (i + 1).toString(),
  value: (i + 1).toString(),
}));

export const monthArray = Array.from({length: 12}, (_, i) => ({
  label: (i + 1).toString(),
  value: (i + 1).toString(),
}));

export const choseDateTypeArray = [
  {label: 'Years', value: 'Years'},
  {label: 'Month', value: 'Month'},
];

export const healthStates = [
  {label: 'Healthy', value: 'Healthy'},
  {label: 'Injured', value: 'Injured'},
  {label: 'Sick', value: 'Sick'},
  {label: 'Recovering', value: 'Recovering'},
  {label: 'Critical', value: 'Critical'},
];
