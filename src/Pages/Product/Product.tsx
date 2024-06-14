import { useParams } from "react-router-dom";
export function Product() {
  const { id } = useParams();
  console.log(id);

  return <>Product - {id}</>;
}
