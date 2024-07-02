export default function sorter(params) {
  const newMass = params.sort((a, b) => b.health - a.health);
  return newMass;
}
