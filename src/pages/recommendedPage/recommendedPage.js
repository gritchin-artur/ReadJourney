import { useSelector } from "react-redux";

export default function RecommendedPage() {
  const email = useSelector((state) => state.auth.email);
  console.log(email);
  return <div style={{ color: "white", fontSize: "30px" }}>Recommended</div>;
}
