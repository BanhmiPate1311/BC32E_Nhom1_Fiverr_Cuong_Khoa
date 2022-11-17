import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const WorkList = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  // console.log("searchParams: ", searchParams.get("search"));
  const search = searchParams.get("search");
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) {
      navigate("/home");
    }
  }, []);
  return <div>WorkList</div>;
};

export default WorkList;
