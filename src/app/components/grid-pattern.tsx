export function GridPattern() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
                linear-gradient(to right, #20202315 1px, transparent 1px),
                linear-gradient(to bottom, #20202315  1px, transparent 1px)
              `,
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, black 80%)",
        }}
      />
    </div>
  );
}
