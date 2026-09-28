const values = [
  {
    title: "Easy to browse",
    text: "A simple, user-friendly online store that makes finding the right pair effortless.",
  },
  {
    title: "Affordable & varied",
    text: "Footwear options for school, work, sports, and everyday use, at prices that fit a student budget.",
  },
  {
    title: "Convenient delivery",
    text: "A reliable online ordering process with delivery straight to your preferred location.",
  },
];

function Mission() {
  return (
    <section id="mission" className="bg-cyan-500 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="display text-5xl md:text-6xl">Our mission</h2>
        <p className="mt-8 max-w-4xl text-2xl font-semibold leading-snug md:text-3xl">
          MOV provides affordable, stylish, and comfortable footwear to
          students, young adults, and other customers through an accessible
          online store.
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">
          We aim to make shoe shopping simple and convenient by offering useful
          choices, reliable service, and delivery to customers' preferred
          locations.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h3 className="display text-3xl">Our vision</h3>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed">
            To become a trusted online footwear brand in the Philippines known
            for affordable, comfortable, and stylish shoes. MOV aims to make
            quality footwear accessible to more customers through a convenient
            online shopping experience.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 border-t-2 border-gray-900 pt-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="wide text-lg font-extrabold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mission;
