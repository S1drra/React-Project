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
    <section id="shopping-info" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Sizing, Payment &amp; Delivery
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Everything you need to know before you check out.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Size Chart */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">Size Chart</h3>
            <table className="mt-4 w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase text-gray-500">
                  <th className="py-2">US</th>
                  <th className="py-2">EU</th>
                  <th className="py-2">CM</th>
                </tr>
              </thead>
              <tbody>
                {sizeChart.map((row) => (
                  <tr key={row.us} className="border-b border-slate-100">
                    <td className="py-2">{row.us}</td>
                    <td className="py-2">{row.eu}</td>
                    <td className="py-2">{row.cm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-gray-500">
              Between sizes? We recommend sizing up. Free size exchanges
              within 7 days of delivery.
            </p>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">Payment Methods</h3>
            <ul className="mt-4 space-y-2">
              {paymentMethods.map((method) => (
                <li
                  key={method}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  {method}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              All transactions are processed securely at checkout.
            </p>
          </div>

          {/* Delivery Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">Delivery Info</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <span className="font-semibold text-gray-900">Processing:</span>{" "}
                1–2 business days before your order ships.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Delivery area:</span>{" "}
                Nationwide shipping across the Philippines.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Delivery time:</span>{" "}
                2–5 business days depending on location.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Delivery fee:</span>{" "}
                Calculated at checkout based on your address.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingInfo;
