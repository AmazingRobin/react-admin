import { useAppDispatch, useAppSelector } from "@/hooks";
import numState from "@/store/NumStates/";
import { Button } from "antd";
function Page1() {
  const num = useAppSelector((state) => state.numReducer.num);
  const dispatch = useAppDispatch();
  const changeNum1 = () => {
    dispatch(numState.asyncAction.asyncAdd1);
  };
  const changeNum2 = () => {
    dispatch({
      type: 'add2',
      val: 10
    });
  };
  return (
    <div>
      <h1>Page 1</h1>
      <br />
      <p>This is the content of Page 1.</p>
      <br />
      <p>reduce . {num}</p>
      <br />
      <Button type="primary" onClick={changeNum1}>Primary Button +1</Button>
      <br />
      <br />
      <Button type="primary" onClick={changeNum2}>Primary Button +10</Button>
    </div>
  );
}
export default Page1;