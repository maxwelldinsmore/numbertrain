import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
type RecordType = {
    _id: string;
    user: string;
    date: string;
    mode: string;
    score: string;
};
export default function Stats() {
  const [records, setRecords] = useState<RecordType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRecords() {
      try {
        const response = await fetch(`http://localhost:5050/record/`);
        console.log('Fetching records...');
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          setError(message);
          console.error(message);
          return;
        }
        const records = await response.json();
        console.log('Records received:', records);
        setRecords(records);
      } catch (err: any) {
        const message = `An error occurred: ${err.message}`;
        setError(message);
        console.error(message);
      }
    }
    getRecords();
  }, []);

  if (error) {
    return <div className="p-4">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Score Records</h3>
      <div className="mt-4">
        {records.length === 0 ? (
          <p>No records found.</p>
        ) : (
          records.map((record: RecordType) => (
            <div key={record._id} className="mb-4">
              <p><strong>User:</strong> {record.user}</p>
              <p><strong>Date:</strong> {new Date(record.date).toLocaleString()}</p>
              <p><strong>Mode:</strong> {record.mode}</p>
              <p><strong>Score:</strong> {record.score}</p>
              <div className="flex gap-2">
                <Link
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
                  to={`/edit/${record._id}`}
                >
                  Edit
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

