import ES5Functions from "./functions/ES5Functions";
import ArrowFunctions from "./functions/ArrowFunctions";
import ImpliedReturn from "./functions/ImpliedReturn";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import FunctionDestructing from "./functions/FunctionDestructing";
function WorkingWithFunctions() {
    console.log('Hello World!');
    return(
       <div>
          <h1>Working With Functions</h1>
          <ES5Functions/>
          <ArrowFunctions/>
          <ImpliedReturn/>
          <FunctionParenthesisAndParameters/>
          <FunctionDestructing/>
       </div>
    );
}
export default WorkingWithFunctions