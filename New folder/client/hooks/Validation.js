import React from "react";
const Validation = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "first Name is Required";
  }
  if (!values.lastName) {
    errors.lastName = "LastName is  Required";
  }
  if (!values.email) {
    errors.email = "email is  Required";
  }
  if (!values.phone) {
    errors.phone = "phone is Required";
  }
  if (!values.password) {
    errors.password = "password is  Required";
  }
  return errors;
};

export default Validation;
