import { TodoCard } from "./TodoCard";

export function TodoList (props) {
    const { todos, selectedTab } = props;
    
    const filteredTodos = selectedTab === 'All' ? todos : selectedTab === 'Completed' ? todos.filter(todo => todo.complete) : todos.filter(todo => !todo.complete);
    
    return (  
        <>
            {filteredTodos.map((todo) => {
                const originalIndex = todos.indexOf(todo);
                return (
                    <TodoCard key={originalIndex} todoIndex={originalIndex} todo={todo} {...props} />
                )
            })}
        </>
    )
}