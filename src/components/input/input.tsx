import { useState } from "react";
import style from "./input.module.sass";

interface InputProps {
  placeholder: string;
  inputName: string;
  icon: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  inputName,
  placeholder,
  icon,
  type,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPass = type == "password";
  const inputType = isPass ? (showPassword ? "text" : "password") : type;

  const tooglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className={style.input_body}>
        <input
          id={inputName}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
        />
        <i className={`fi fi-sr-${icon}`}></i>
      </div>

      {isPass && (
        <div className={style.btn_container}>
          <button
            className={style.btn_pass}
            onClick={tooglePassword}
            type="button"
          >
            {showPassword ? "Ocultar senha" : "Mostrar senha"}
            <i
              className={`fi fi-sr-${showPassword ? "eye-crossed" : "eye"}`}
            ></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Input;
