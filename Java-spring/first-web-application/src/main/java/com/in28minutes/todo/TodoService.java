package com.in28minutes.todo;

import java.util.ArrayList;
import java.util.Date;

public class TodoService {
	
	private static ArrayList<Todo> todos = new ArrayList<Todo>();
	private static int todoCount = 3;
	
	static {
		todos.add(new Todo(1, "in28minutes", "Learn Spring MVC", new Date(), false));
		todos.add(new Todo(2, "in28minutes", "Learn structs", new Date(), false));
		todos.add(new Todo(3, "in28minutes", "Learn hibernage", new Date(), false));
	}
	
}
