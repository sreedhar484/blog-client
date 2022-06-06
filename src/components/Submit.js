import React, { useEffect } from "react";
import { Text, Box, Button, Grid,Flex } from "@chakra-ui/core";
import { Link,useHistory } from "react-router-dom";
import Axios from "axios"
import Cookie from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import {toast} from 'react-toastify';

function Submit(props) {
  toast.configure()
  useEffect(() => {
    props.state.entry = false;
  }, []);
  const history=useHistory()
  const userData = JSON.parse(Cookie.get("userData"));
  const color=["#990000","#4B5D67","#5FD068","#FAC213","#243A73",
  "#C70A80","#F24C4C","#00FFAB","#9EB23B"]
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
        {(userData.accType=="superadmin")?(
          props.state.data.filter((data)=>(
            data.approve==1)).map((data,idx)=>(
          <Box key={idx} mx={["16px", "16px", "16px", "40px"]} my={["16px", "16px", "16px", "16px"]} d={["flex", "flex", "flex", "flex"]}>
                      <Box p={4} mb={6} width="100%" boxShadow="0 0 4px 2px rgba(49,49,49,0.10)" borderRadius="md" >
                      <Flex width="100%" >
                      <Box backgroundColor={color[Math.floor(Math.random()*color.length)]} borderRadius="50%" border="2px" w="50px" h="50px" mr={3} alignItems="center">
                            <Text mx="15px" mt="4px" fontSize="25px" fontWeight="600">
                                {data.title==undefined?"":data.title[0].toUpperCase()}
                            </Text>
                        </Box>
                          <Flex width="100%" direction="column">
                              <Flex width="100%" justifyContent="space-between">
                                  <Text color="#265182" fontWeight="600" fontSize="md">{data.title} </Text>
                                  <Flex>
                                  <Flex  align="center" cursor="pointer" d={(userData.accType=="superadmin")?"flex":"none"}>
                                      <img  alt=""></img>
                                      <Text mr={4} ml={1} color="#5FD068" fontWeight="600">Approved </Text>
                                  </Flex>
                                  <Flex onClick={() => {Cookie.set("userClick", JSON.stringify(data));history.push("/bulletin/post");}} align="center" cursor="pointer">
                                      <img  alt=""></img>
                                      <Text mr={4} ml={1} color="#1E9ED2" fontWeight="600">View </Text>
                                  </Flex>
                                  </Flex>
                                  
                              </Flex>
                              <Flex mt={0} flexDir={{ base: 'column', md: "row" }}>
                                  <Text color="#343434" fontSize="xs">{data.author}</Text>
                                  <Box borderRight="1px solid #B8B8B8" mt={1} mb={1} mx={2} display={{ base: "none", md: 'block' }}></Box>
                                  <Text color="#343434" fontSize="xs">{data.createdAt}</Text>
                              </Flex>
                              <Text my={4} ml={{ base: "-2.75rem", md: 0 }}>{data.info}</Text>
                              {/* <Box w={{ base: "280px", md: "400px" }} h="200px" borderRadius="md" backgroundColor="tomato" ml={{ base: "-2.75rem", md: 0 }}></Box> */}
                          </Flex>
                      </Flex>
                  </Box>
      </Box>
          )))
          :(props.state.data.filter((data)=>(
            data.author==userData.userName)).map((data,idx)=>(
          <Box key={idx} mx={["16px", "16px", "16px", "40px"]} my={["16px", "16px", "16px", "16px"]} d={["flex", "flex", "flex", "flex"]}>
                      <Box p={4} mb={6} width="100%" boxShadow="0 0 4px 2px rgba(49,49,49,0.10)" borderRadius="md" >
                      <Flex width="100%" >
                      <Box backgroundColor={color[Math.floor(Math.random()*color.length)]} borderRadius="50%" border="2px" w="50px" h="50px" mr={3} alignItems="center">
                            <Text mx="15px" mt="4px" fontSize="25px" fontWeight="600">
                                {data.title==undefined?"":data.title[0].toUpperCase()}
                            </Text>
                        </Box>
                          <Flex width="100%" direction="column">
                              <Flex width="100%" justifyContent="space-between">
                                  <Text color="#265182" fontWeight="600" fontSize="md">{data.titlenew} </Text>
                                  <Flex>
                                  <Flex  align="center" cursor="pointer" d={(userData.accType=="admin")?"flex":"none"}>
                                      <img  alt=""></img>
                                      <Text mr={4} ml={1} color="#5FD068" fontWeight="600">{(data.approve==1)?"Approved":"Approval Waiting"} </Text>
                                  </Flex>
                                  <Flex onClick={() => {Cookie.set("userClick", JSON.stringify(data));history.push("/bulletin/post");}} align="center" cursor="pointer">
                                      <img  alt=""></img>
                                      <Text mr={4} ml={1} color="#1E9ED2" fontWeight="600">View </Text>
                                  </Flex>
                                  </Flex>
                                  
                              </Flex>
                              <Flex mt={0} flexDir={{ base: 'column', md: "row" }}>
                                  <Text color="#343434" fontSize="xs">{data.author}</Text>
                                  <Box borderRight="1px solid #B8B8B8" mt={1} mb={1} mx={2} display={{ base: "none", md: 'block' }}></Box>
                                  <Text color="#343434" fontSize="xs">{data.createdAt}</Text>
                              </Flex>
                              <Text my={4} ml={{ base: "-2.75rem", md: 0 }}>{data.infonew}</Text>
                              {/* <Box w={{ base: "280px", md: "400px" }} h="200px" borderRadius="md" backgroundColor="tomato" ml={{ base: "-2.75rem", md: 0 }}></Box> */}
                          </Flex>
                      </Flex>
                  </Box>
      </Box>
          )))
        }
    </Box>

    </Grid>
  );
}

export default Submit;


