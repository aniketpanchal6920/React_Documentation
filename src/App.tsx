import ClassBased_main from "./classe_based/ClassBased_main";
import MainContextFile from "./context/MainContextFile";
import { FunctionBased_main } from "./function_based/FunctionBased_main";
import LazyMain from "./lazyAndSuspense/LazyMain";
import ParentComponent from "./memo/ParentComponent";

const App = () => {
  return (
    <div>

      <div>
        <ClassBased_main />
      </div>
      <hr />
      <div>
        <FunctionBased_main />
      </div>
      <hr />
      <div>
        <ParentComponent />
      </div>
      <hr />
      <div>
        <LazyMain />
      </div>
      <hr />
      <div>
        <MainContextFile />
      </div>
      <hr />
      <div>

      </div>
    </div>
  );
};

export default App;
