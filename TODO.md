assumption: forgot to look at shapeOfData.md and made my own based on [yup](https://github.com/jquense/yup)

- consolidate styles & create constants for colors, etc.
- move local state in index.tsx (patients data & form submitted status) to React context provider to avoid passing props
- render multiple NewPatientForm components for multiple patients: add onClick (and remove temp disabled prop) on button to add a new patient that adds a patient to local state and triggers rendering another NewPatientForm component
- add address input picker/autocomplete