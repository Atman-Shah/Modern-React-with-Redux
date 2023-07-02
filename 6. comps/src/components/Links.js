import classNames from 'classnames';
import { useNavigate, useLocation } from "react-router-dom";

function Link({ to, children, className, activeClassName }) {
  const Navigate = useNavigate();
  const location = useLocation();

  const classes = classNames(
    'text-blue-500',
    className,
    location.pathname === to && activeClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    Navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
    
}

export default Link;
