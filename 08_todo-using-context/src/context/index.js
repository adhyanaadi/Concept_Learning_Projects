export {TodoContext, TodoProvider, useTodo} from "./TodoContext"

// import { TodoContext, TodoProvider, useTodo } from "./TodoContext";
// export {TodoContext, TodoProvider, useTodo} from "./TodoContext";


// 5. 2 ways of exporting something:
// 	1. export {TodoContext, TodoProvider, useTodo} from "./TodoContext"
// 	2. import { TodoContext, TodoProvider, useTodo } from "./TodoContext";
// 	export {TodoContext, TodoProvider, useTodo} from "./TodoContext";
// We use 1st one when we do not have to use that particular functionality in the given file. Generally used in index.js. We use the 2nd one in files where we have to actually use the functionality also. Both are correct in their respective use cases.