import React from "react";
const ServerValidation = (values) => {
  let error = {};
  if (
    values.firstName === "please enter valid firstname only alphabet Allowed"
  ) {
    error.firstName = "please enter valid firstname only alphabet Allowed";
  }
  if (values.firstNameSpace === "space is not allowed in firstname") {
    error.firstNameSpace = "space is not allowed in firstname";
  }
  if (values.lastName === "please enter valid lastname only alphabet Allowed") {
    error.lastName = "please enter valid lastname only alphabet Allowed";
  }
  if (values.lastNameSpace === "space is not allowed in lastname") {
    error.lastNameSpace = "space is not allowed in lastname";
  }
  if (values.email === "please enter valid email") {
    error.email = "please enter valid email";
  }
  if (values.emailSpace === "space is not allowed in email") {
    error.emailSpace = "space is not allowed in email";
  }
  if (values.phone === "please enter valid phone number") {
    error.phone = "please enter valid phone number";
  }
  if (values.phoneSpace === "space is not allowed in phoneNumber") {
    error.phoneSpace = "space is not allowed in phoneNumber";
  }

  if (
    values.password ===
    "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters"
  ) {
    error.password =
      "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters";
  }
  if (values.passwordSpace === "space is not allowed in password") {
    error.passwordSpace = "space is not allowed in password";
  }
  if (values.emailPresent === "this email id is already registered") {
    error.emailPresent = "this email id is already registered";
  }
  if (values.message === "successfully created") {
    error.message = "successfully created";
  }
  return error;
};

export default ServerValidation;
