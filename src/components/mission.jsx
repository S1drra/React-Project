function Mission() {
  return (
    <section id="mission" className="bg-slate-200 py-16 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          We believe movement shouldn't be limited by your gear. MOV exists to
          make quality, comfortable footwear accessible to everyone — no matter
          where your day takes you.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="font-bold text-gray-900">Comfort First</h3>
            <p className="mt-1 text-sm text-gray-600">Engineered cushioning in every pair.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Built to Last</h3>
            <p className="mt-1 text-sm text-gray-600">Durable materials, tested for the long run.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">For Everyone</h3>
            <p className="mt-1 text-sm text-gray-600">Styles for every activity and budget.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;