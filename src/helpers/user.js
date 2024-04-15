import User from "../classes/User";
import "../index.css";
import { PLACEHOLDER_URL, QUERY_TYPE } from "../constants/common";

export const getCollectionData = ({ name, email, phone }) =>
  new User({ name, email, phone });

export const getCollectionDataWithId = ({ id, name, email, phone }) =>
  new User({ id, name, email, phone });
  

export const getUsers = async () => {
  const resJson = await fetch(`${PLACEHOLDER_URL}${QUERY_TYPE.users}`);
  const res = await resJson.json();
  

  const collectionData = res.map(getCollectionDataWithId);


  return collectionData;
};
