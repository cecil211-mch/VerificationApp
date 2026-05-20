export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className={`result ${result.status?.toLowerCase()}`}>
      <h3>Status: {result.status}</h3>

      {result.confidence && (
        <p>Confidence: {result.confidence}</p>
      )}
    </div>
  );
}