interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email address',
  username: 'Must start with a capital letter',
  password: 'Password is too short'
};

Object.keys(errorBag).forEach(key => {
  console.log(`Error in ${key}: ${errorBag[key]}`);
});