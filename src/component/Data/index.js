import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* Action */
import { user } from "../../store/duck/users/action";

const Data = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Faço meu Dispatch no Componente");
    dispatch(user());
  }, []);

  const { users } = useSelector(state => state);
  console.log(
    "Uso o Hook: useSelector() pra pegar meu estado populado no component :",
    users,
  );
  return <div>{users.data.name}</div>;
};

export default Data;
