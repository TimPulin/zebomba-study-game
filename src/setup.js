export async function setup(root, app) {
  await app.init({
    width: 980,
    height: 630,
    backgroundColor: '#149483',
  });

  if (root) {
    root.appendChild(app.canvas);
  }
}
