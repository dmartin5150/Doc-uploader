import { PdfExtractedData } from "../types/PDFExtractedData";
import { InsuranceEntry } from "../types/InsuranceEntry";

export default function ReferralForm({ data }: { data: PdfExtractedData }) {
  const safeInsurance: InsuranceEntry[] = Array.isArray(data.insurance)
    ? data.insurance
    : [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { insurance, ...stringFields } = data;

  return (
    <section className="bg-white border rounded-lg overflow-hidden shadow-sm">
      <header className="bg-blue-700 text-white px-4 py-3 text-lg font-semibold">
        Patient FaceSheet
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-4 py-6">
        {Object.entries(stringFields).map(([key, value]) => (
          <Field key={key} label={formatLabel(key)} value={value ?? ""} />
        ))}
      </div>

      <div className="border-t px-4 py-6">
        <h3 className="text-md font-semibold mb-4 text-gray-700">Insurance</h3>
        {safeInsurance.length === 0 && (
          <p className="text-gray-500 text-sm">No insurance entries found.</p>
        )}
        {safeInsurance.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {safeInsurance.map((entry, idx) => (
              <InsuranceCard key={idx} entry={entry} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function getColorClass(type: string) {
  switch (type.toLowerCase()) {
    case "med primary":
      return "bg-green-50 text-green-800";
    case "med secondary":
      return "bg-yellow-50 text-yellow-800";
    default:
      return "bg-blue-50 text-blue-800";
  }
}

function InsuranceCard({ entry }: { entry: InsuranceEntry }) {
  return (
    <div className="w-64 min-h-[160px] border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition duration-200">
      <div
        className={`border-b border-gray-200 px-4 py-2 rounded-t-lg ${getColorClass(
          entry.type ?? ""
        )}`}
      >
        <span className="text-xs font-semibold uppercase tracking-wider">
          {entry.type ?? "Insurance"}
        </span>
      </div>
      <div className="px-4 py-3 space-y-2">
        <InsuranceField label="Plan" value={entry.plan ?? ""} />
        <InsuranceField
          label="Insurance Number"
          value={entry.insurance_number ?? ""}
        />
      </div>
    </div>
  );
}

function InsuranceField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="block text-xs font-semibold text-gray-600 uppercase tracking-wider">
        {label}
      </span>
      <span className="block text-sm text-gray-800">{value}</span>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">
        {label}
      </label>
      <div className="border rounded px-3 py-2 bg-gray-100 text-sm">
        {value}
      </div>
    </div>
  );
}

function formatLabel(key: string) {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
