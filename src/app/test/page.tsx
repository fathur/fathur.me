export default function Page() {
  return (
    <div className="flex flex-row flex-wrap">
      {Array.from({ length: 50 }, (_, index) => {
        const randomHeight = Math.floor(Math.random() * 100) + 20; // Random height between 20-120px
        return (
          <div
            key={index}
            className="border m-2 w-20"
            style={{ height: `${randomHeight}px` }}
          >
            Echo {index}
          </div>
        );
      })}
    </div>
  );
}
