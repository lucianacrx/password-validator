/*
Util file with validator function logic
- Based on keys, maps the requirements of the password and validates them
- Can add more validators here
*/

export const passwordRequirements = [
  {
    key: 'hasNumber',
    message: "Has a number 0-9",
    validate: password => {
      const trimmedPassword = password.trim();

      if (trimmedPassword && trimmedPassword.length) {
        return /[0-9]/.test(trimmedPassword);
      }

      return false;
    }
  },
  {
    key: 'hasSpecialChar',
    message: "Has a special char !@#$%^&*",
    validate: password => {
      const trimmedPassword = password.trim();

      if (trimmedPassword && trimmedPassword.length) {
        return /[!@#$%^&*]/.test(trimmedPassword);
      }

      return false;
    }
  },
  {
    key: 'hasUppercaseLetter',
    message: "Has uppercase letter",
    validate: password => {
      const trimmedPassword = password.trim();

      if (trimmedPassword && trimmedPassword.length) {
        return /[A-Z]/.test(trimmedPassword);
      }

      return false;
    }
  },
  {
    key: 'hasNoConsecutiveRepeatingLetters',
    message: "Has no consecutive repeating letters",
    validate: password => {
      const trimmedPassword = password.trim();

      if (trimmedPassword && trimmedPassword.length) {
        return !(/([a-zA-Z])\1/).test(trimmedPassword);
      }

      return false;
    }
  }
];