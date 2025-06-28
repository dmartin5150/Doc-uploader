import { UploadResult } from "../types/UploadResult";

interface ResponseViewerProps {
  response: UploadResult | null;
}

export default function ResponseViewer({ response }: ResponseViewerProps) {
  if (!response) return null;

  if ("error" in response) {
    return (
      <div className="mt-6 text-red-600">
        <strong>Error:</strong> {response.error}
      </div>
    );
  }

  const data = response.data;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Extracted Patient Information</h2>

      <section className="bg-white shadow border rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="Patient Name" value={data.patient_name} />
          <Field label="Sex" value={data.sex} />
          <Field label="Date of Birth" value={data.dob} />
          <Field label="Address" value={data.address} />
          <Field label="City / State / Zip" value={data.city_state_zip} />
          <Field label="Home Phone" value={data.home_phone} />
          <Field label="Work Phone" value={data.work_phone} />
          <Field label="Mobile Phone" value={data.mobile_phone} />
          <Field label="Default Pharmacy" value={data.default_pharmacy} />
          <Field label="Preferred Lab" value={data.preferred_lab} />
          <Field label="Height" value={data.height} />
          <Field label="Weight" value={data.weight} />
          <Field label="BMI" value={data.bmi} />
          <Field label="Blood Pressure" value={data.blood_pressure} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mt-4 mb-2">Insurance</h3>
          {data.insurance.length === 0 && (
            <p className="text-gray-500">No insurance entries found.</p>
          )}
          {data.insurance.map((entry, idx) => (
            <div
              key={idx}
              className="border rounded p-4 mb-4 bg-gray-50 space-y-2"
            >
              <Field label="Type" value={entry.type} />
              <Field label="Plan" value={entry.plan} />
              <Field label="Insurance Number" value={entry.insurance_number} />
            </div>
          ))}
        </div>
      </section>
    </div>
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
