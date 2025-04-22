// First define the array of specialties
const specialtyValues = [
  'All',
  'Allergology',
  'Dermatology',
  'Emergency Medicine',
  'Family Medicine',
  'Internal Medicine',
  'Neurology',
  'Obstetrics and Gynecology',
  'Oncology',
  'Ophthalmology',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'Surgery',
  'Urology'
] as const;

// Create the type from the array values
export type Specialty = typeof specialtyValues[number];

// Export the array and map
export const specialties: Specialty[] = [...specialtyValues];
export const specialtiesMap: Map<Specialty, Specialty> = new Map(
  specialties.map(specialty => [specialty, specialty])
);
