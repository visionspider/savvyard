import React, { useContext, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
//IoMdAddCircle
import styled from "styled-components";
import Form from "./Form";

const Add = ({ zone, pos, type }) => {
  const [add, setAdd] = useState(false);
  return (
    <>
      <AddBtn onClick={() => setAdd(true)} />
      {add && <Form set={setAdd} zone={zone} pos={pos} type={type} />}
    </>
  );
};

const AddBtn = styled(IoMdAddCircleOutline)`
  cursor: pointer;
  background-color: transparent;
  font-size: 1.2rem;
`;
export default Add;
