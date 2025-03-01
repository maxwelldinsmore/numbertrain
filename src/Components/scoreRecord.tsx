import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
type RecordType = {
    _id: string;
    user: string;
    date: string;
    mode: string;
    score: string;
};
export default function Record() {
  const [record, setRecord] = useState({} as RecordType);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id?.toString() || undefined;
      if (!id) return;
      const response = await fetch(
        `http://localhost:5050/record/${params.id?.toString()}`
      );
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const data = await response.json();
      if (!data) {
        console.warn(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setRecord(data);
    }
    fetchData();
    return;
  }, [params.id, navigate]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">User Information</h3>
      <div className="mt-4">
        <p><strong>User:</strong> {record.user}</p>
        <p><strong>Date:</strong> {new Date(record.date).toLocaleString()}</p>
        <p><strong>Mode:</strong> {record.mode}</p>
        <p><strong>Score:</strong> {record.score}</p>
      </div>
    </div>
  );
}