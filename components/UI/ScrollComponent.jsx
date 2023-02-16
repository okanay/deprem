import { Link as Scroll } from "react-scroll";

const ScrollComponent = ({ enable, children, where }) => {
  return (
    <div>
      {enable ? (
        <Scroll
          activeClass="active"
          to={where}
          spy={true}
          smooth={true}
          offset={-70}
          duration={250}
        >
          {children}
        </Scroll>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default ScrollComponent;
