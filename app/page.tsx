export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 90"
        width="160"
        height="144"
      >
        <polygon
          points="50,6 96,84 4,84"
          fill="#FBBF24"
          stroke="#1a1100"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <text
          x="50"
          y="76"
          textAnchor="middle"
          fontSize="52"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          fill="#1a1100"
        >
          !
        </text>
      </svg>
      <h1 className="text-5xl font-bold text-white">Work in Progress</h1>
    </main>
  );
}
