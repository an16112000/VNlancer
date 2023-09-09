import GlobalStyles from "@mui/material/GlobalStyles";

interface GlobalStylesProps {
  children: any;
}

function Global({ children }: GlobalStylesProps) {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#CECACA" },
        }}
      />
      {children}
    </>
  );
}

export default Global;
