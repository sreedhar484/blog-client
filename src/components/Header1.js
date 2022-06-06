import React from "react";
import { Box, Image, Text, Icon, Button,Flex } from "@chakra-ui/core";

import "../App.css";

import Cookie from "js-cookie";
import { Link, Redirect,useHistory } from "react-router-dom";


function Header1(props) {
  return (
    <div className="header">
      <Box
        h={["60px", "60px", "60px", "106px"]}
        w="100%"
        backgroundColor="black"
        borderRadius={["0px", "0px", "0px", "0px"]}
      >
        <Box
          py={4}
          ml="10px"
          mr="40px"
          d={["none", "none", "none", "flex"]}
          justifyContent="space-between"
        >
          <Box d="flex" mt="15px" fontSize='25px'>
            <Text ml="30px" color="#FFFFFF">Deutch Bank</Text> 
            <Image src="https://pnptc-media.s3.amazonaws.com/images/Deutsche-Bank-Logo.max-600x480.png"  width="50px" height="30px"ml="15px" />
          </Box>
          <Box as={Flex} d="flex" mt="2%" justifyContent="space-between">
          <Button
                mr="50px"
                h={6}
                fontSize="25px"
                color="white"
                backgroundColor="black"
                justifyContent="left"
                ml={-4}
                as={Link}
                to="/"
                p="15px"
              >
                  Login
              </Button>
              <Button
                h={6}
                color="white"
                backgroundColor="black"
                justifyContent="left"
                ml={-4}
                fontSize="25px"
                as={Link}
                to="/register"
                p="15px"
              >
                Register
              </Button>
          </Box>
        </Box>
        <Box py="1px" ml="16px" d="flex" justifyContent="space-between">
        <Box d={["flex", "flex", "flex", "none"]}>
            <Text ml="40px" color="#FFFFFF">Deutch Bank</Text> 
            <Image src="https://pnptc-media.s3.amazonaws.com/images/Deutsche-Bank-Logo.max-600x480.png"  width="50px" height="30px"ml="30px" />
          </Box>
          <Box d={["flex", "flex", "flex", "none"]} mt="10px" mr="20px">
           {/* <Box
              d={["flex", "flex", "flex", "none"]}
              float="right"
              border="1px solid white"
              color="white"
              h={8}
              mr={2}
              borderRadius="5px"
            >
              <ReactPaginate
                previousLabel={<Icon name="chevron-left" />}
                nextLabel={<Icon name="chevron-right" />}
                breakLabel={"/ " + props.state.pageCount}
                pageCount={props.state.pageCount}
                marginPagesDisplayed={0}
                pageRangeDisplayed={0}
                onPageChange={props.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
  </Box>*/}
  <Button
                h={6}
                color="white"
                backgroundColor="#112147"
                justifyContent="left"
                ml={-4}
                as={Link}
                to="/"
              >
                  Login
              </Button>
            <Button
              h={8}
              // border="1px solid white"
              color="white"
              backgroundColor="#112147"
              as={Link}
                to="/register"
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Header1;
