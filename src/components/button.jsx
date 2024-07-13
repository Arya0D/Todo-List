const Button = ({ title, href }) => {
  return (
    <button className="w-24 h-11 rounded-xl bg-slate-300">
      <a href={href}>{title}</a>
    </button>
  );
};

export default Button;
