<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Yahooo!!! from jsp</title>
</head>
<%
	// write java code here
	System.out.println("debugging print");
	System.out.println(request.getParameter("name"));
	Date date = new java.util.Date();
%>
<body>
<div>Current Date is <%=date %></div>
my first jsp ${name} and password is ${password}

<form action="/login" method="post">
	name: <input type="text" name="name">
	name: <input type="password" name="password">
	<input type="submit" value="Submit">
</form>

<p><font color="red">${errorMessage}</font></p>

</body>
</html>