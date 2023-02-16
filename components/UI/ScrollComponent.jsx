import { Link as Scroll } from "react-scroll";

const ScrollComponent = ({ enable, children, where }) => {
  return (
    <div>
        <Scroll
          activeClass="active"
          to={where}
          spy={true}
          smooth={true}
          offset={-70}
          duration={enable ? 500 : 0}
        >
          {children}
        </Scroll>
    </div>
  );
};

export default ScrollComponent;
