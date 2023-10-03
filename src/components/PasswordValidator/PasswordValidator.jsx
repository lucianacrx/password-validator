import React from "react";
import { passwordRequirements } from "../../utils";
import "./PasswordValidator.css";

const PasswordValidator = ({ rules, value, onChange, className }) => {
  const wrapperClassname = className ? `wrapper ${className}` : "wrapper";
  // Filters the password requirements based on the rules passed to the component
  const passwordReqs = rules && passwordRequirements.filter(pwdReq => rules.includes(pwdReq.key));

  return (
    <div className={wrapperClassname}>
      <h1>Password Component</h1>
      <div className="container">
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <ul className="requirement-list">
          {passwordReqs && passwordReqs.length > 0 ? (
            passwordReqs.map(pwdReq => {
              const { key, message, validate } = pwdReq || {};
              const isValid = validate(value);
              const iconStyle = isValid ? "valid" : "invalid";
              const icon = isValid ? "✔" : "x";

              return (
                <li key={key} className="requirement">
                  <span className={`icon ${iconStyle}`}>{icon}</span>
                  <span>{message}</span>
                </li>
              )
            })
          ) : <span>No password requirements set</span>}
        </ul>
      </div>
    </div>
  )
};

export default PasswordValidator;