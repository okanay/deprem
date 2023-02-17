import { Link as Scroll } from "react-scroll";

const ScrollComponent = ({ disabled, children, where }) => {
  return (
    <div>
      {!disabled ? (
        <Scroll
          activeClass="active"
          to={where}
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          {children}
        </Scroll>
      ) : (
        <Scroll
          to={""}
          spy={false}
          smooth={false}
          offset={0}
          duration={0}
        >
          {children}
        </Scroll>
      )}
    </div>
  );
};

export default ScrollComponent;
