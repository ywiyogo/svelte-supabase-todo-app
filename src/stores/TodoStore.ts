// Reference https://svelte.dev/examples/writable-stores

import { writable } from "svelte/store";
import { supabase } from "../supabase.ts";

// A list of the todo entries
export const todoEntries = writable([]);

export const loadTodos = async () => {
	const { data, error } = await supabase.from('todo').select();

	if (error) {
		return console.error(error);
	} else {
		todoEntries.set(data);
	}
}


export const addTodo = async (text, user_id) => {
	const { data, error } = await supabase.from('todo').insert({ text, user_id });
	if (error) {
		return console.error(error);
	}
	// pass a callback function to the update function
	todoEntries.update((cur) => [...cur, data[0]]);
};

export const deleteTodo = async (id) => {
	const { error } = await supabase.from('todo').delete().match({ id });
	if (error) {
		return console.error(error);
	}
	todoEntries.update((todoEntries) => todoEntries.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id, currentState) => {
	const { error } = await supabase.from('todo').update({ completed: !currentState }).match({ id })
	if (error) {
		return console.error(error);
	}
	todoEntries.update((todoEntries) => {
		let index = -1;
		for (let i = 0; i < todoEntries.length; i++) {
			if (todoEntries[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todoEntries[index].completed = !todoEntries[index].completed;
		}
		return todoEntries;
	});
};
