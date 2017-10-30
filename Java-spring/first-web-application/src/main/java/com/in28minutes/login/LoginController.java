 package com.in28minutes.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.in28minutes.login.LoginService;

@Controller
public class LoginController {
	
	@Autowired
	LoginService service;
	
	@RequestMapping(value="/login", method=RequestMethod.GET)
	public String showLoginPage() {
		// todo-serverlet.xml will add prefix /WEB-INF/views/
		// and suffix .jsp to login
		// then the full path will be /WEB-INF/views/login.jsp
		// this is a view resolver
		return "login";
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String handleLoginRequest(@RequestParam String name, @RequestParam String password, ModelMap model) {
		// redirect to login page if user is not authenticated
		if (!service.validateUser(name, password)) {
			model.put("errorMessage", "Invalid Credentials!");
			return "login";
		}
		
		// model passing alone the parameters to view
		//  will be available in view
		model.put("name", name); 
		model.put("password", password);
		// todo-serverlet.xml will add prefix /WEB-INF/views/
		// and suffix .jsp to login
		// then the full path will be /WEB-INF/views/login.jsp
		// this is a view resolver
		return "welcome";
	}
	
	
}
