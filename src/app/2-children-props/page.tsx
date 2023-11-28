import Child from "@/components/childrenComp/Child";
import Parent from "@/components/childrenComp/Parent";
import SecondChild from "@/components/childrenComp/SecondChild";

const ChildrenProps = () => {
  return (
    <div>
      <Parent>
        <Child />
        <SecondChild />
      </Parent>
    </div>
  );
};
export default ChildrenProps;
