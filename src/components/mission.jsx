function Mission() {
  return (
    <section id="mission" className="bg-slate-200 py-16 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          MOV provides affordable, stylish, and comfortable footwear to
          students, young adults, and other customers through an accessible
          online store. We aim to make shoe shopping simple and convenient by
          offering useful choices, reliable service, and delivery to
          customers' preferred locations.
        </p>

        <h3 className="mt-10 text-xl font-bold text-gray-900">Our Vision</h3>
        <p className="mt-3 text-gray-600">
          To become a trusted online footwear brand in the Philippines known
          for affordable, comfortable, and stylish shoes. MOV aims to make
          quality footwear accessible to more customers through a convenient
          online shopping experience.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div>
            <h3 className="font-bold text-gray-900">Easy to Browse</h3>
            <p className="mt-1 text-sm text-gray-600">
              A simple, user-friendly online store that makes finding the
              right pair effortless.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Affordable & Varied</h3>
            <p className="mt-1 text-sm text-gray-600">
              Footwear options for school, work, sports, and everyday use —
              at prices that fit a student budget.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Convenient Delivery</h3>
            <p className="mt-1 text-sm text-gray-600">
              A reliable online ordering process with delivery straight to
              your preferred location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;