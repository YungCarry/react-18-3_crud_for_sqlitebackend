import { useParams } from "react-router-dom";
import { User } from "../types/User";
import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";

const Users = () => {
  const { email } = useParams();

  const [data, setData] = useState<User>();

  useEffect(() => {
    apiClient
      .get("users/" + { email })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <div>
      <p>{data?.email}</p>
      <p>{data?.firstName}</p>
      <p>{data?.lastName}</p>
      <p>{data?.class}</p>

  </div>;
};

export default Users;
