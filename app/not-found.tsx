export default function NotFound() {
  return (
    <main className="shell flex min-h-screen flex-col items-start justify-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="h2 mt-6">That page isn’t on the floor.</h1>
      <a href="/" className="btn btn-gold mt-10">
        Back to Star Casino
      </a>
    </main>
  );
}
