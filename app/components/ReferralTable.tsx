export default function ReferralTable({ data }: { data: Record<string, string> }) {
  return (
    <section className="bg-white shadow border rounded-lg overflow-hidden">
      <div className="bg-blue-600 px-4 py-2">
        <h3 className="text-white text-md font-semibold">Extracted Data</h3>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <tbody>
          {Object.entries(data).map(([key, value], idx) => (
            <tr
              key={key}
              className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-4 py-3 text-sm font-medium text-gray-700 w-1/3 border-b border-gray-200">
                {formatLabel(key)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-b border-gray-200">
                {value || <span className="text-gray-400 italic">—</span>}
              </td>
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
