import React, { useEffect, useState } from "react";
import { Text, Box, Button, Grid,Flex } from "@chakra-ui/core";
import { Link,useHistory } from "react-router-dom";
import Axios from "axios"
import Cookie from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import {toast} from 'react-toastify';

function History(props) {
  toast.configure()
  const [data,setData]=useState([])
  useEffect(() => {
    Axios.get("http://localhost:8080/history").then((res)=>{
      console.log(res.data)
        setData(res.data)
    })
    .catch(err=>console.log(err))
  }, []);
  const history=useHistory()
  const userData = JSON.parse(Cookie.get("userData"));
  // const onApprove=()=>{
  //   // onapprove change post status to approved
  //   //userClick cookie 
  //   let post = JSON.parse(Cookie.get("userClick"))
  //     Axios.post("http://localhost:8080/approve",{id:post.id,approve:1})
  //     .then((res)=>{
  //       console.log(res.data,'post approved')
  //       toast.success("Post approved", { position: toast.POSITION.TOP_CENTER });
  //     })
  //     .catch((err)=>console.log(err))
  // }
  return (
    <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 2fr"]}>
      <Box ml="50px" mt="40px" d={["none", "none", "none", "flex"]}>
        <Link to="/bulletin" w="full">
          <Button
            border="1px solid #112147"
            backgroundColor="white"
            w="143px"
            h="40px"
          >
            BACK
          </Button>
        </Link>
      </Box>
      
      


      <Box>
      <Grid
              mt="20px"
              w="100%"
              h="50px"
              fontSize="14px"
              templateColumns="repeat(4, 1fr)"
              gap={2}
              backgroundColor="black"
              border="1px solid #112147"
              alignItems="center"
              color="white"
            >
                <Text>Post Name</Text>
                <Text>Author</Text>
                <Text>Content</Text>
                <Text>Updated At</Text>
            </Grid>
        {(userData.accType=="superadmin")?(
          data.map((data,idx)=>(
                <Grid key={idx}
                w="100%"
                h="50px"
                fontSize="14px"
                templateColumns="repeat(4, 1fr)"
                gap={2}
                border="1px solid #112147"
                alignItems="center"
              >
                  <Text>{data.updatedtitle}</Text>
                  <Text>{data.author}</Text>
                  <Text>{data.updatedinfo}</Text>
                  <Text>{data.updatedAt}</Text>
              </Grid>
          )))
          :(data.filter((data)=>(
            data.author==userData.userName)).map((data,idx)=>(
                <Grid key={idx}
                w="100%"
                h="50px"
                fontSize="14px"
                templateColumns="repeat(4, 1fr)"
                gap={2}
                border="1px solid #112147"
                alignItems="center"
              >
                  <Text>{data.updatedtitle}</Text>
                  <Text>{data.author}</Text>
                  <Text>{data.updatedinfo}</Text>
                  <Text>{data.updatedAt}</Text>
              </Grid>
          )))
        }
    </Box>

    </Grid>
  );
}

export default History;


