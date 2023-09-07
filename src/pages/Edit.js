import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지입니다.</p>
      <button onClick={() => setSearchParams({ who: "mukho" })}>바꿔.</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
    </div>
  );
};

export default Edit;
