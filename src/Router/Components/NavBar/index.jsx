import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { rightMenu, leftMenu } from ".";

const NavBar = () => {
  return (
    <Flex
      as={"nav"}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      <Flex justifyContent={"space-between"} w="100%">
        {leftMenu.map((section) => (
          <NavLink key={section.name} to={section.to}>
            {section.name}
          </NavLink>
        ))}
      </Flex>
      <Box w="40%" />
      <Flex justifyContent={"space-between"} w="100%">
        {rightMenu.map((link) => (
          <NavLink key={link.name} to={link.to} className={className}>
            {link.name}
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};

export default NavBar;