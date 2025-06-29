export default function ReferralTable({ data }: { data: Record<string, string> }) {
  return (
    <section className="bg-white shadow border rounded-lg p-6">
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Field</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="border-t">
              <td className="px-4 py-2 font-medium">{formatLabel(key)}</td>
              <td className="px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function formatLabel(key: string) {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
