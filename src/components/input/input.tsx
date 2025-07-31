import { useState } from "react";
import style from "./input.module.sass";

interface InputProps {
  placeholder: string;
  icon: string;
  type: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ placeholder, icon, type, disabled = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPass = type === "password";
  const inputType = isPass && showPassword ? "text" : type;

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={style.input_body}>
      <input
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
        className={style.input_field}
      />

      {/* Ícone ou botão de senha */}
      {!isPass ? (
        <i className={`fi fi-sr-${icon} ${style.input_icon}`}></i>
      ) : (
        <button
          type="button"
          onClick={togglePassword}
          className={style.input_icon}
        >
          <i className={`fi fi-sr-${showPassword ? "eye" : "eye-crossed"}`}></i>
        </button>
      )}
    </div>
  );
};

export default Input;
