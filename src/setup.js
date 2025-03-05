export async function setup(app) {
  await app.init({
    width: 980,
    height: 630,
    backgroundColor: '#149483',
  });

  const root = document.getElementById('app');
  if (root) {
    root.appendChild(app.canvas);
  }
}
