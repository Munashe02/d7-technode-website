import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return (
    <section className="section-technical py-20">
      <div className="container-custom relative">
        <div className="technical-panel max-w-3xl p-8">
          <p className="eyebrow text-primary-700">Content Studio</p>
          <h1 className="mt-3 text-4xl font-heading font-bold text-slate-950">
            Run the CMS separately while developing.
          </h1>
          <p className="mt-5 leading-8 text-slate-600">
            The website is ready to consume Sanity content, but the Sanity Studio app lives in the
            <code className="mx-1 rounded bg-slate-100 px-1.5 py-0.5">sanity</code> folder and
            should run as its own dev server.
          </p>
          <div className="mt-8 rounded-md bg-slate-950 p-4 font-mono text-sm text-slate-100">
            cd sanity
            <br />
            npm run dev
          </div>
          <p className="mt-5 leading-8 text-slate-600">
            That usually opens Sanity Studio on <span className="font-semibold">http://localhost:3333</span>.
            The main website should be viewed through the Next dev server.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-primary inline-flex justify-center">
              Back to Website
            </Link>
            <a href="http://localhost:3333" className="rounded-md border border-slate-300 px-5 py-3 text-center font-semibold text-slate-800 transition hover:bg-slate-100">
              Open Local Studio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
