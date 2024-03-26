const importAll = (r) => r.keys().map(r);

export default function importImages(directory) {
  return importAll(require.context(directory, false, /\.(png|jpe?g|svg)$/));
}
