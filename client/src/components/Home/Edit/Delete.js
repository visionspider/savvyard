import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
//TiDeleteOutline or TiDelete
import styled from "styled-components";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
const Delete = ({ id, type = "default" }) => {
  const { deleteZoneOrDevice } = useContext(CurrentUserContext);
  return <DeleteBtn onClick={() => deleteZoneOrDevice(id, type)} />;
};

const DeleteBtn = styled(AiFillDelete)`
  cursor: pointer;
  background-color: transparent;
  font-size: 1.2rem;
`;
export default Delete;
