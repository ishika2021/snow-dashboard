interface ButtonProps {
  title: string;
  style?: string;
  action: ()=>{} | void;
}

const Button = ({ title, style = "default", action }:ButtonProps) => {
    
  return (
    <span className={`btn btn-${style}`} onClick={action}>
      {title}
    </span>
  );
  
};

export default Button;
