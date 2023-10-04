import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Button } from '@radix-ui/themes';
export function Navigation() {
  return (
    // <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
    //   <span className="font-bold"> REACT</span>

    //   <Link to="/"> Products </Link>
    //   <Link to="/About"> About</Link>
    // </nav>
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
