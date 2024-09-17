const validateSignInFormData = (email, password) => {
  const regxForEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  const regxForPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

  if (!email || !password) {
    alert("Please enter Email/Password");
    return false;
  }
  if (!regxForEmail.test(email)) {
    alert("Please enter valid Email");
    return false;
  }
  if (!regxForPassword.test(password)) {
    alert("Please enter valid Password");
    return false;
  }
  return true;
};

export default validateSignInFormData;
