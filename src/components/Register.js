import {
  Box,
  Image,
  Input,
  FormControl,
  FormHelperText,
  Text,
  Button,
  FormLabel,
  Select
} from "@chakra-ui/core";
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";
import React, { Component } from "react";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      password1: "",
      question: "",
      answer: "",
      acctype:"",
      erroru: false,
      errorp: false,
      errorp1: false,
      errorum: "",
      errorpm: "",
      errorpm1: "",
      erroracctype:"",
      errorque:"",
      errorans:"",
      reg: false,
      file: null      
    };
  }
  changeHandle = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  };
  changeHandle1 = (event) => {
    this.setState({ [event.target.name]: event.target.files[0] });
  };
  btnClick1 = (event) => {
    event.preventDefault();
    if (this.state.acctype!==""){
    if (this.state.username.length !== 0) {
      let pl =this.state.password.length;
      let pl1 =this.state.password1.length;
      if (pl !== 0){
        if (pl1!=0 || this.state.password===this.state.password1){
          if(this.state.question.length!==0){
            if(this.state.answer.length!==0){
              let data = {
                username: this.state.username,
                password: this.state.password,
                acctype:this.state.acctype,
                question: this.state.question,
                answer: this.state.answer,
              }
              console.log(data)
              Axios.post("https://urblog.herokuapp.com/register",data)
                .then((res) => {
                  console.log(res.data);
                  if (res.data === "Username Already Exist") {
                    this.setState({
                      errorpm1: "",
                      errorum: "Username Already Exist",
                      errorpm: "",
                      userName: "",
                      password: "",
                      password1: "",
                    });
                  } else {
                    this.setState({ reg: true, errorpm1: "" });
                  }
                })
                .catch((err) => console.log(err));
            }
            else{
              this.setState({ errorans: "Please enter answer", errorque: "" ,errorpm1: "",errorpm: "",errorum: "" ,erroracctype:""}); 
            }
          }
          else{
            this.setState({ errorque: "Please enter question", errorpm1: "",errorpm: "",errorum: "" ,erroracctype:"" });
          }
        }
        else{
          this.setState({ errorpm1: "Please enter password", errorpm: "",errorum: "" ,erroracctype:"" });
        } 
      } else {
        this.setState({ errorpm: "Please enter password", errorum: "" ,erroracctype:""});
      }
    } else {
      this.setState({ errorum: "Please enter username",erroracctype:"" });
    }
  }
  else{
    this.setState({ erroracctype: "Please select acc type" });
  }
  };
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
              src={logo}
              alt="logo"
              w={["244px", "244px", "244px", "349px"]}
              h={["74px", "74px", "74px", "104px"]}
            />
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
          </Box> */}
          <Box mx={["25px", "25px", "25px", "40px"]} mt="20px">
            <form onSubmit={this.btnClick1}>
              <Text
                fontSize="30px"
                // fontFamily="NotoSansJP-Bold"
                color="#7EAACD"
                fontWeight="bold"
                letterSpacing="1.2px"
              >
                REGISTER
              </Text>
              <FormControl mt="5%">
                      <Select name="acctype" onChange={this.changeHandle} variant="flushed" id='acctype' placeholder='Select Acc Type'>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                      </Select>
                      <FormHelperText color="red.500">
                  {this.state.erroracctype}
                </FormHelperText>
              </FormControl>
              <FormControl mt="5%">
                <Input
                  variant="flushed"
                  type="text"
                  placeholder="USER NAME"
                  name="username"
                  value={this.state.username}
                  onChange={this.changeHandle}
                  borderColor={
                    this.state.erroru ? "crimson" : "rgba(255,255,255,0.24)"
                  }
                  focusBorderColor={this.state.erroru ? "crimson" : "#2A69AC"}
                ></Input>
                <FormHelperText color="red.500">
                  {this.state.errorum}
                </FormHelperText>
              </FormControl>
              <FormControl mt="5%">
                <Input
                  type="password"
                  variant="flushed"
                  placeholder="PASSWORD"
                  name="password"
                  value={this.state.password}
                  onChange={this.changeHandle}
                  borderColor={
                    this.state.errorp ? "crimson" : "rgba(255,255,255,0.24)"
                  }
                  focusBorderColor={this.state.errorp ? "crimson" : "#2A69AC"}
                ></Input>
                <FormHelperText color="red.500">
                  {this.state.errorpm}
                </FormHelperText>
              </FormControl>
              <FormControl mt="5%">
                <Input
                  type="password"
                  variant="flushed"
                  placeholder="CONFIRM PASSWORD"
                  name="password1"
                  value={this.state.password1}
                  onChange={this.changeHandle}
                  borderColor={
                    this.state.errorp1 ? "crimson" : "rgba(255,255,255,0.24)"
                  }
                  focusBorderColor={this.state.errorp1 ? "crimson" : "#2A69AC"}
                ></Input>
                <FormHelperText color="red.500">
                  {this.state.errorpm1}
                </FormHelperText>
              </FormControl>
              <FormControl mt="5%">
                <Input
                  type="text"
                  variant="flushed"
                  placeholder="Security Question"
                  name="question"
                  value={this.state.question}
                  onChange={this.changeHandle}
                  borderColor={
                    this.state.errorp1 ? "crimson" : "rgba(255,255,255,0.24)"
                  }
                  focusBorderColor={this.state.errorp1 ? "crimson" : "#2A69AC"}
                ></Input>
                <FormHelperText color="red.500">
                  {this.state.errorque}
                </FormHelperText>
              </FormControl>
              <FormControl mt="5%">
                <Input
                  type="text"
                  variant="flushed"
                  placeholder="Answer"
                  name="answer"
                  value={this.state.answer}
                  onChange={this.changeHandle}
                  borderColor={
                    this.state.errorp1 ? "crimson" : "rgba(255,255,255,0.24)"
                  }
                  focusBorderColor={this.state.errorp1 ? "crimson" : "#2A69AC"}
                ></Input>
                <FormHelperText color="red.500">
                  {this.state.errorans}
                </FormHelperText>
              </FormControl>
              
              {this.state.reg ? (
                <Redirect to="/" />
              ) : (
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
                  REGISTER
                </Button>
              )}
            </form>
            <Link to="/">
              <Text mb="40%">Already have an account</Text>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Register;
