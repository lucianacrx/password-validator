import { useState } from 'react';
import PasswordValidator from './components/PasswordValidator/PasswordValidator';

/*
  For testing purposes
  - Pass an array with the keys of the requirements that will be validated
  - We can see the keys and logic in the utils file
*/
const rules = [
  'hasNumber',
  'hasSpecialChar',
  'hasUppercaseLetter',
  'hasNoConsecutiveRepeatingLetters'
];

function App() {
  const [password, setPassword] = useState("");

  // The component receives a value and an onChange function, since the goal is to use it in several applications
  return (
    <PasswordValidator
      rules={rules}
      value={password}
      onChange={(pw) => setPassword(pw)}
    />
  );
}

export default App;
