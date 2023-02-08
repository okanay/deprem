import { useEffect, useState } from "react";
import { changeValue } from "../../src/app/counter";
import { useDispatch, useSelector } from "react-redux";

const useDynamicClass = (initializeValue) => {
  const reduxValue = useSelector((state) => state.value.value);
  const dispatch = useDispatch();

  const [value, setValue] = useState(initializeValue);

  function setDynamicValue(dynamicValue) {
    dispatch(changeValue(dynamicValue));
  }

  useEffect(() => {
    setValue(reduxValue);
  }, [reduxValue]);

  return [value, setDynamicValue];
};

export default useDynamicClass;
