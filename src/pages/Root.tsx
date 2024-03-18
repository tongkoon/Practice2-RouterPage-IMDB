import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootPage() {
  return (
    <>
      <Navbar/>
      <Container  sx={{ marginTop: 10 }}>
        <Outlet/>
      </Container>
      
    </>
  );
}

export default RootPage;
