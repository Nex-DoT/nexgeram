export const validationError = (inputData) => {
    // error messages
    const errors = {};

    // regex patterns
    let userregex = /^[a-z0-9_\.]+$/;
    let phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // phone number test
    if (!phoneRegex.test(inputData.phoneNumber)) {
        errors.phoneNumberTest = "Phone Number is not a valid phone number";
   } else {
       delete errors.phoneNumberTest;
   }

   // email test
   if (!emailRegex.test(inputData.email)) {
       errors.emailTest = "Email is not a valid email";
   } else {
       delete errors.emailTest;
   }

  // username test
  if (!userregex.test(inputData.userName)) {
      errors.userName =
          "Usernames can only have: (a-z) (0-9) (.) (_)";
  } else{
      delete errors.userName;
  }
  
  // returning error object 
  return errors;
};