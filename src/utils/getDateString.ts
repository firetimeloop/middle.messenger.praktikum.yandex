export default (date: string) => (
  `${new Date(date).getHours() || ''}:${new Date(date).getMinutes() || ''}`
);
