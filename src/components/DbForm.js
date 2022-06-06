import React, { useEffect, useState } from "react";
import { Link, Redirect,useHistory } from "react-router-dom";
import Axios from "axios";
import {
  Box,
  Flex,
  Input,
  FormHelperText,
  FormLabel,
  FormControl,
  Button,
  Text,
  Textarea,
  Radio,
  RadioGroup,
  InputGroup,
  InputRightElement,
  Icon,
  Image,
} from "@chakra-ui/core";

import Cookie from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import {toast} from 'react-toastify';

function DbForm(props) {
  toast.configure()
  const [name,changeName]=useState("")
  const [content,changeContent]=useState("")
  const [nameerr,changeNameErr]=useState("")
  const [contenterr,changeContentErr]=useState("")
  const history=useHistory()
  const submitOnData =(event)=>{
    event.preventDefault();
    if(name.length!=0){
      changeNameErr("");
      if(content.length!=0){    
        let data = JSON.parse(Cookie.get("userData"))
        Axios.post("https://urblog.herokuapp.com/write",{username:data.userName, title:name, info:content})
        .then((res)=>{
          console.log(res.data,'post added')
          toast.success("post added successfully", { position: toast.POSITION.TOP_CENTER });
          changeNameErr("");
          history.push("/bulletin");
          props.onRefresh()
        })
        .catch((err)=>console.log(err))
      }
      else{
        changeContentErr("Please Enter Content");
      }
    }
    else{
      changeNameErr("Please Enter Post Name");
    }
  }
  return (
    <Flex mx="3%">
      
      <Box width="18%" d={["none", "none", "none", "flex"]}>
        <Link to="/bulletin">
          <Button
            mt="50px"
            border="1px solid #112147"
            backgroundColor="white"
            w="143px"
            h="40px"
          >
            BACK
          </Button>
        </Link>
      </Box>
      <Box w={["100%", "100%", "100%", "82%"]}>
        <form onSubmit={submitOnData} >
          <Text
            color="#104670"
            fontSize="18px"
            fontWeight="bold"
            mt={["24px", "24px", "30px", "55px"]}
          >
          NEW POST  
          </Text>
          <FormControl mt={6}>
            {/* <FormLabel htmlFor="name" opacity="0.45">
              POST NAME
            </FormLabel> */}
            <Input
              mt={-4}
              placeholder="Post Name"
              variant="flushed"
              name="name"
              id="name"
              value={name}
              onChange={(event)=>changeName(event.target.value)}
            ></Input>
            <FormHelperText color="red.500">
            {nameerr}
            </FormHelperText>
          </FormControl>
          
          <FormControl mt={6}>
            {/* <FormLabel htmlFor="name" opacity="0.45">
              POST CONTENT
            </FormLabel> */}
            <Textarea value={content}
              onChange={(event)=>changeContent(event.target.value)}
        placeholder='Post Content'
        size='sm'
        resize="vertical"
      />
            <FormHelperText color="red.500">
              {contenterr}
            </FormHelperText>
          </FormControl>
          <Button
              type="submit"
              mt={8}
              mb={2}
              backgroundColor="#1A365D"
              color="white"
              w={["100%", "100%", "100%", "15%"]}          
            >
              SUBMIT
            </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default DbForm;
