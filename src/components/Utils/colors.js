const spectrum = [
  '#c62828',
  '#AD1457',
  '#6A1B9A',
  '#4527A0',
  '#283593',
  '#1565C0',
  '#0277BD',
  '#00838F',
  '#00695C',
  '#2E7D32',
  '#558B2F',
  '#9E9D24',
  '#F9A825',
  '#FF8F00',
  '#EF6C00',
  '#D84315',
  '#4E342E',
  '#424242',
  '#37474F',
];

export const randomColor = () => spectrum[Math.floor(Math.random() * spectrum.length)];
