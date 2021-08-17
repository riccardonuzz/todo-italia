import { TodoCard } from "./TodoCard";

export const Todos = ({ todos, isLoading }) => {


    if (isLoading) {
        return 'Loading...';
    } else {
        if (todos && todos.length) {
            return todos.map(todo => <TodoCard key={todo.id} todo={todo} />);
        }

        return '';
    }
};
