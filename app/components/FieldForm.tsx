export default function FieldForm({ data }: { data: Record<string, string> }) {
  return (
    <section className="border rounded-xl shadow overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-600 px-4 py-2">
        <h2 className="text-white text-lg font-semibold">Faxed Referral Order</h2>
      </div>

      {/* Form Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white">
        {Object.entries(data)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, value]) => value && value.trim() !== "")
          .map(([key, value]) => (
            <Field key={key} label={formatLabel(key)} value={value ?? ""} />
          ))}
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      <input
        type="text"
        readOnly
        value={value}
        className="mt-1 block w-full border border-gray-200 rounded-md bg-gray-50 text-sm px-3 py-2"
      />
    </div>
  );
}

function formatLabel(key: string) {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
