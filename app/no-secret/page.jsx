export default function NoSecretPage() {
  return (
    <div style={{ padding: 30 }}>
      <h2>No secret found ❌</h2>
      <p>The Edge Middleware could not read process.env.NEXTAUTH_SECRET.</p>
    </div>
  );
}
