import React, { Component } from "react";


import Axios from "axios";
import Cookie from "js-cookie";
import {
  Box,
  Image,
  Input,
  FormControl,
  FormHelperText,
  Text,
  Button,
} from "@chakra-ui/core";
import { Redirect,Link } from "react-router-dom";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData:[
        {userid:1,userName:"pawan",userMail:"pawan@gmail.com",accType:"superadmin"}
      ],
      userName: "",
      password: "",
      question: "",
      id: "",
      errorum: "",
      errorpm: "",
      log: false,
      erroru: false,
      errorp: false,
      templog:false,
      answer:"",
      errorans:"",
      finalerr:""
    };
  }
  changeHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  btnClick = (event) => {
    event.preventDefault();
    if (this.state.templog==true){
      Axios.post("https://urblog.herokuapp.com/login",{id: this.state.id,answer:this.state.answer})
      .then((res)=>{
        console.log(res.data)
        if (res.data=="Invalid Answer"){
          this.setState({finalerr:"invalid Answer"})
        }
        else{
          this.setState({log:true},
            () => {
              this.props.logStatus();
              Cookie.set("userData",JSON.stringify(res.data))
              this.props.onRefresh();
            });
        }
        
      })
      .catch((err)=>console.log(err))
    }
    if (this.state.userName.length !== 0) {
      if (this.state.password.length !== 0) {
        Axios.post("https://urblog.herokuapp.com/login",{username:this.state.userName,password:this.state.password})
        .then((res)=>{
          console.log(res.data)
            if (res.data=="Invalid Credentials"){
            this.setState({finalerr:"invalid credentials"})
          }
          else{
            this.setState({ templog: true, errorpm: "", question:res.data.question,id:res.data.id,finalerr:"" });
          }
          
        })
        .catch((err)=>console.log(err))

      } else {
        this.setState({ errorpm: "Please enter password", errorum: "" });
      }
    } else {
      this.setState({ errorum: "Please enter username" });
    }
  }
  render() {
  return (
    <Box
      d="flex"
      w="100%"
      mx={["0%","0%","30%","30%"]}
      flexDirection={["column", "column", "column", "row"]}
    >
       {/* <Box
        w={["100%", "100%", "100%", "64%"]}
        h={["40%", "40%", "40%", "100%"]}
      >
        <Box
          py={["22%", "22%", "22%", "34%"]}
          px={["15%", "20%", "30%", "35%"]}
        >
          <Image
            src="https://pnptc-media.s3.amazonaws.com/images/Deutsche-Bank-Logo.max-600x480.png"
            alt="logo"
            w={["244px", "244px", "244px", "349px"]}
            h={["74px", "74px", "74px", "104px"]}
          />
          <Text ml="35px" fontSize="30px" fontWeight="bold"
              letterSpacing="2px" >Deutch Bank</Text>
        </Box>
      </Box> */}
      <Box
        backgroundColor="#112147"
        w={["100%", "100%", "100%", "36%"]}
        h={["60%", "60%", "60%", "100%"]}
        color="white"
      >
         {/* <Box
          h="60%"
          d={["none", "none", "none", "flex"]}
          justifyContent="flex-end"
        >
          <Image src={logbackground} alt="background" float="right"></Image>
        </Box>  */}
        <Box mx={["25px", "25px", "25px", "40px"]}  >
          <form onSubmit={this.btnClick}>
            <Text
              fontSize="30px"
              color="#7EAACD"
              fontWeight="bold"
              letterSpacing="1.2px"
              mt="20%"
            >
              LOGIN
            </Text>
            <FormControl mt="12%">
              <Input
                variant="flushed"
                type="text"
                placeholder="USER NAME"
                name="userName"
                value={this.state.userName}
                onChange={this.changeHandle}
                isReadOnly={this.state.templog}
                borderColor={
                  this.state.erroru ? "crimson" : "rgba(255,255,255,0.24)"
                }
                focusBorderColor={this.state.erroru ? "crimson" : "#2A69AC"}
              ></Input>
              <FormHelperText color="red.500">
                {this.state.errorum}
              </FormHelperText>
            </FormControl>
            <FormControl mt="14%">
              <Input
                type="password"
                variant="flushed"
                placeholder="PASSWORD"
                name="password"
                value={this.state.password}
                onChange={this.changeHandle}
                isReadOnly={this.state.templog}
                borderColor={
                  this.state.errorp ? "crimson" : "rgba(255,255,255,0.24)"
                }
                focusBorderColor={this.state.errorp ? "crimson" : "#2A69AC"}
              ></Input>
              <FormHelperText color="red.500">
                {this.state.errorpm}
              </FormHelperText>
              </FormControl>
            {this.state.log && <Redirect to="/bulletin" />}
            {this.state.templog ? (
              <Box>
                <Text color='gray.500' noOfLines={1}>
                   {this.state.question} ?
                </Text>
                <FormControl>
              <Input
                variant="flushed"
                type="text"
                placeholder="answer"
                name="answer"
                value={this.state.answer}
                onChange={this.changeHandle}
                borderColor={
                  this.state.erroru ? "crimson" : "rgba(255,255,255,0.24)"
                }
                focusBorderColor={this.state.erroru ? "crimson" : "#2A69AC"}
              ></Input>
              <FormHelperText color="red.500">
                {this.state.errorans}
              </FormHelperText>
            </FormControl>
            <Button
                type="submit"
                mt="5%"
                backgroundColor="white"
                fontFamily="Rubik-Regular"
                fontSize="18px"
                color="#112147"
                borderRadius="4px"
                width="114px"
                h="44px"
              >
                Login
              </Button>
            </Box>
            ) : (
              <Button
                type="submit"
                mt="14%"
                backgroundColor="white"
                fontFamily="Rubik-Regular"
                fontSize="18px"
                color="#112147"
                borderRadius="4px"
                width="114px"
                h="44px"
              >
                Login
              </Button>
            )}
            <Text color="red.500">
                {this.state.finalerr}
              </Text>
          </form>
          <Box>
              <Text mb="40%">Suggesion : This website is compatable for all devices can u please chck with all compatable devices.</Text>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
}
export default Login;

