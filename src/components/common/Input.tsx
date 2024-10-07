/**
 * Input 공통컴포넌트
 *
 */

const Input = ({ className, name, placeholder, onChange, type }: any) => {
  return (
    <div>
      <input
        className={className}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      ></input>
    </div>
  );
};

export default Input;
