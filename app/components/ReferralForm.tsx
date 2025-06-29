import { PdfExtractedData} from "../types/PDFExtractedData";
import { InsuranceEntry } from "../types/InsuranceEntry";

export default function ReferralForm({ data }: { data: PdfExtractedData }) {
  // Defensive: default insurance to an empty array if undefined
  const safeInsurance: InsuranceEntry[] = Array.isArray(data.insurance)
    ? data.insurance
    : [];

    console.log("ReferralForm data:", data);
    
  // Remove insurance from the string fields
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { insurance, ...stringFields } = data;

  return (
    <section className="bg-white shadow border rounded-lg p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(stringFields).map(([key, value]) => (
          <Field key={key} label={formatLabel(key)} value={value ?? ""} />
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
        {safeInsurance.length === 0 && (
          <p className="text-gray-500">No insurance entries found.</p>
        )}
        {safeInsurance.map((entry, idx) => (
          <div
            key={idx}
            className="border rounded p-4 mb-4 bg-gray-50 space-y-2"
          >
            <Field label="Type" value={entry.type ?? ""} />
            <Field label="Plan" value={entry.plan ?? ""} />
            <Field label="Insurance Number" value={entry.insurance_number ?? ""} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        readOnly
        value={value}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none"
      />
    </div>
  );
}

function formatLabel(key: string) {
  return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
