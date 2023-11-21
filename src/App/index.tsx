import { Flex } from "@chakra-ui/react";
import SideBar from "./Component/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Flex color="#fff">
      <SideBar />
      <Outlet />
    </Flex>
  );
}

export default App;
