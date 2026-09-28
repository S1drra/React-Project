const sizeChart = [
  { us: "6", eu: "38", cm: "24.0" },
  { us: "7", eu: "39", cm: "25.0" },
  { us: "8", eu: "40", cm: "26.0" },
  { us: "9", eu: "41", cm: "27.0" },
  { us: "10", eu: "42", cm: "28.0" },
  { us: "11", eu: "43", cm: "29.0" },
];

const paymentMethods = [
  "GCash",
  "Bank Transfer",
  "Credit / Debit Card",
  "Cash on Delivery",
];

function ShoppingInfo() {
  return (
    <section id="shopping-info" className="bg-slate-200 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="display max-w-3xl text-5xl md:text-6xl">
          Sizing, payment &amp; delivery
        </h2>
        <p className="mt-4 max-w-md text-lg text-gray-900/70">
          Everything you need to know before you check out.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.8fr_1.1fr]">
          {/* Size chart */}
          <div className="rounded-3xl bg-white p-7">
            <h3 className="display text-2xl">Size chart</h3>
            <table className="mt-5 w-full text-left text-sm">
              <thead>
                <tr className="text-gray-900/60">
                  <th className="pb-2 font-semibold">US</th>
                  <th className="pb-2 font-semibold">EU</th>
                  <th className="pb-2 font-semibold">CM</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row) => (
                  <tr key={row.us} className="border-t border-gray-900/10">
                    <td className="wide py-2.5 text-base font-extrabold text-cyan-700">
                      {row.us}
                    </td>
                    <td className="py-2.5">{row.eu}</td>
                    <td className="py-2.5">{row.cm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-gray-900/70">
              Between sizes? We recommend sizing up. Free size exchanges within
              7 days of delivery.
            </p>
          </div>

          {/* Payment methods */}
          <div className="rounded-3xl bg-gray-900 p-7 text-slate-200">
            <h3 className="display text-2xl">Payment methods</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <li
                  key={method}
                  className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-gray-900"
                >
                  {method}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/85">
              All transactions are processed securely at checkout.
            </p>
          </div>

          {/* Delivery info */}
          <div className="rounded-3xl bg-white p-7">
            <h3 className="display text-2xl">Delivery info</h3>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Processing", "1–2 business days before your order ships."],
                ["Delivery area", "Nationwide shipping across the Philippines."],
                ["Delivery time", "2–5 business days depending on location."],
                ["Delivery fee", "Calculated at checkout based on your address."],
              ].map(([term, detail]) => (
                <div key={term} className="border-l-4 border-cyan-500 pl-4">
                  <dt className="font-bold">{term}</dt>
                  <dd className="mt-0.5 text-gray-900/75">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingInfo;
