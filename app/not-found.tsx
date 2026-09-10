import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: '190px', minHeight: '76svh' }}>
      <div className="wrap">
        <span className="micro">Error 404</span>
        <h1 className="display" style={{ marginBlock: '18px 22px' }}>
          404
        </h1>
        <p className="lede" style={{ maxWidth: '38ch', marginBottom: 30 }}>
          Looks like you took a wrong turn. Let’s take you back where things make sense.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href="/" className="btn">
            Go back home
          </Link>
          <Link href="/work" className="btn btn--ghost">
            See the work
          </Link>
        </div>
      </div>
    </section>
  );
}
