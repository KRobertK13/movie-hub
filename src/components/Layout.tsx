import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleSearch = (keyword: string) => {
    navigate(`/?query=${encodeURIComponent(keyword)}`);
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav" " main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar searchHandler={handleSearch} />
      </GridItem>
      <GridItem area="main">
        <Outlet />
      </GridItem>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
