import style from "./input.module.sass";

interface InputProps {
  placeholder: string;
  icon: string;
  type: string;
}

const Input: React.FC<InputProps>= ({placeholder, icon, type}) => {
  return (
    <div className={style.input_body}>
      <input type={type} placeholder={placeholder}/>
      <i className={`fi fi-sr-${icon}`}></i>
    </div>
  );
};

export default Input;
