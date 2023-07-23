export function DisplayColors({ colors }) {
  console.log(colors);
  return (
    <div className="flex  gap-2">
      {JSON.parse(String(colors[0]))?.map((color) => (
        <p
          key={color}
          className={`ml-1  h-5 w-5 cursor-pointer rounded-full  `}
          style={{
            background: color,
          }}
        ></p>
      ))}
    </div>
  );
}
