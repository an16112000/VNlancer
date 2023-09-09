interface TitleProps {
  value: string;
}

function Title({ value }: TitleProps) {
  return (
    <h1
      style={{
        fontSize: "26px",
        fontWeight: "600",
      }}
    >
      {value}
    </h1>
  );
}

export default Title;
