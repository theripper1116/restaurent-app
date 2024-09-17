const validateSignUpFormData = (formDataObj) => {
  const regxForEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  const regxForPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  const regxForContact = /^(?![ -])(?!.*[- ]$)(?!.*[- ]{2})[0-9- ]+$/;

  const {
    email,
    password,
    c_password,
    name,
    city,
    address,
    contact,
  } = formDataObj;

  if (
    !email ||
    !password ||
    !c_password ||
    !name ||
    !city ||
    !address ||
    !contact
  ) {
    alert("Please fill out all the forms fields to proceed");
    return false;
  }
  if (!regxForEmail.test(email)) {
    alert("Please enter a valid email");
    return false;
  }
  if (password !== c_password) {
    alert("Password not match");
    return false;
  }
  if (!regxForPassword.test(password)) {
    alert("Please enter valid Password");
    return false;
  }  
  if (!regxForContact.test(contact) && contact.length !== 10) {
    alert("Please enter valid Contact number");
    return false;
  }
  return true;
};

export default validateSignUpFormData;
