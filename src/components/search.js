import React, { useState,use } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Grid,
  Text,
  Image,
  InputLeftElement,
  InputGroup,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Checkbox,
  useDisclosure,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@chakra-ui/core";

import "../App.css";
import { Link, Redirect } from "react-router-dom";

import Posts from "./posts";
import Cookie from "js-cookie";
export const postContext = React.createContext();
function Search(props) {
  const [searchVal, onSearchClick] = useState(false);
  const userData = JSON.parse(Cookie.get("userData"));
  return (
    <Box mx={["16px", "16px", "16px", "40px"]}>
      {/* button in mobile view */}
      <Link to="/newentry">
        <Button
          mt="16px"
          d={userData.accType!=="user"?["flex", "flex", "flex", "none"]:"none"}
          h="40px"
          w="100%"
          border="1px solid #112147"
          backgroundColor="white"
          borderRadius="4px"
          boxShadow="0 0 7px 2px rgba(0,0,0,0.12)"
        >
          
          <span style={{"font-size":'30px',"margin-right":"10px","margin-top":"-5px"}}>+</span>
          ADD NEW POST
        </Button>
      </Link>
      <Link to="/bulletin">
        <Button
          mt="16px"
          d={userData.accType=="superadmin"?["flex", "flex", "flex", "none"]:"none"}
          h="40px"
          w="100%"
          border="1px solid #112147"
          backgroundColor="white"
          borderRadius="4px"
          boxShadow="0 0 7px 2px rgba(0,0,0,0.12)"
          color="#990000"
        >
          Not Reviewed
        </Button>
      </Link>

      
      
      <Link to="/super">
        <Button
          mt="16px"
          d={userData.accType=="superadmin"?["flex", "flex", "flex", "none"]:"none"}
          h="40px"
          w="100%"
          border="1px solid #112147"
          backgroundColor="white"
          borderRadius="4px"
          boxShadow="0 0 7px 2px rgba(0,0,0,0.12)"
          color="#5FD068"
        >
          Reviewed
        </Button>
      </Link>

      <Link to="/history">
        <Button
          mt="16px"
          d={userData.accType!="user"?["flex", "flex", "flex", "none"]:"none"}
          h="40px"
          w="100%"
          border="1px solid #112147"
          backgroundColor="white"
          borderRadius="4px"
          boxShadow="0 0 7px 2px rgba(0,0,0,0.12)"
        >
          History
        </Button>
      </Link>
      
      <Link to="/bulletin">
        <Button
          mt="16px"
          d={userData.accType=="admin"?["flex", "flex", "flex", "none"]:"none"}
          h="40px"
          w="100%"
          border="1px solid #112147"
          backgroundColor="white"
          borderRadius="4px"
          boxShadow="0 0 7px 2px rgba(0,0,0,0.12)"
          color="#990000"
        >
          All Posts
        </Button>
      </Link>

      <Link to="/super">
        <Button
          mt="16px"
          d={userData.accType=="admin"?["flex", "flex", "flex", "none"]:"none"}
          h="40px"
          w="100%"
          border="1px solid #112147"
          backgroundColor="white"
          borderRadius="4px"
          boxShadow="0 0 7px 2px rgba(0,0,0,0.12)"
          color="#990000"
        >
          My Posts
        </Button>
      </Link>


      



      <Box
        mt={["28px", "28px", "28px", "40px"]}
        h={["24px", "24px", "24px", "30px"]}
        d="flex"
        justifyContent="space-between"
      >
        <Box d="flex">
          {searchVal ? (
            <InputGroup
              d={["flex", "flex", "flex", "none"]}
              w="100%"
              flexDirection="column"
            >
              <InputLeftElement
                children={<Icon name="search" mb={4} color="#112147" />}
              />
              <Input
                variant="flushed"
                w="100%"
                type="text"
                h="24px"
                value={props.state.search}
                placeholder="Search Entry"
                name="search"
                onChange={props.searchEvent}
              />
              <FormHelperText d={props.state.search1 ? "none" : "flex"}>
                {props.state.data.length} results found
              </FormHelperText>
            </InputGroup>
          ) : (
            <Text mr={4} fontSize={["12px", "12px", "12px", "18px"]}>
              {/* ALL POSTS */}
            </Text>
          )}
          <Link to="/newentry">
            <Button
              d={userData.accType!=="user"?["none", "none", "none", "flex"]:"none"}
              h="24px"
              w="165px"
              border="1px solid #112147"
              backgroundColor="white"
              borderRadius="4px"
            >
              <span style={{"font-size":'30px',"margin-right":"10px"}}>+</span>
              ADD NEW POST
            </Button>
          </Link>
          <Link to="/bulletin">
            <Button
              d={userData.accType=="superadmin"?["none", "none", "none", "flex"]:"none"}
              h="24px"
              w="165px"
              border="1px solid #112147"
              backgroundColor="white"
              borderRadius="4px"
              mx="10px"
              color="#990000"
            >
              Not Reviewed
            </Button>
          </Link>
          <Link to="/super">
            <Button
              d={userData.accType=="superadmin"?["none", "none", "none", "flex"]:"none"}
              h="24px"
              w="165px"
              border="1px solid #112147"
              backgroundColor="white"
              borderRadius="4px"
              mx="10px"
              color="#5FD068"
            >
              Reviewed
            </Button>
          </Link>

          <Link to="/history">
            <Button
              d={userData.accType!=="user"?["none", "none", "none", "flex"]:"none"}
              h="24px"
              w="165px"
              border="1px solid #112147"
              backgroundColor="white"
              borderRadius="4px"
              mx="10px"
            >
              History
            </Button>
          </Link>
          
          <Link to="/bulletin">
            <Button
              d={userData.accType=="admin"?["none", "none", "none", "flex"]:"none"}
              h="24px"
              w="165px"
              border="1px solid #112147"
              backgroundColor="white"
              borderRadius="4px"
              mx="10px"
              color="#5FD068"
            >
              All Posts
            </Button>
          </Link>
          <Link to="/super">
            <Button
              d={userData.accType=="admin"?["none", "none", "none", "flex"]:"none"}
              h="24px"
              w="165px"
              border="1px solid #112147"
              backgroundColor="white"
              borderRadius="4px"
              mx="10px"
              color="#5FD068"
            >
              My Posts
            </Button>
          </Link>

        </Box>
        <Box>
          <Box d={["flex", "flex", "flex", "none"]}>
            {searchVal ? (
              ""
            ) : (
              <IconButton
                icon="search"
                backgroundColor="white"
                h="24px"
                onClick={() => onSearchClick(!searchVal)}
              ></IconButton>
            )}
          </Box>
          <FormControl d={["none", "none", "none", "flex"]}>
            <FormHelperText d={props.state.search1 ? "none" : "flex"}>
            {props.state.data.length} results found
            </FormHelperText>
            <InputGroup>
              <InputLeftElement
                children={<Icon name="search" mb={3} color="#112147" />}
              />
              <Input
                variant="flushed"
                w="100%"
                type="text"
                h="24px"
                value={props.state.search}
                placeholder="Search Entry"
                name="search"
                onChange={props.searchEvent}
              />
            </InputGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}

export default Search;
