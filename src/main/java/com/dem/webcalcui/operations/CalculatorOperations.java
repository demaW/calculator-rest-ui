package com.dem.webcalcui.operations;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/calc")
public class CalculatorOperations {

	@GET
	@Path("/add/{a}/{b}")
	@Produces(MediaType.TEXT_PLAIN)
	public String add(@PathParam("a") String a, @PathParam("b") String b) {
		return String.valueOf(Double.parseDouble(a) + Double.parseDouble(b));
	}

	@GET
	@Path("/subtract/{a}/{b}")
	@Produces(MediaType.TEXT_PLAIN)
	public String subtract(@PathParam("a") String a, @PathParam("b") String b) {
		return String.valueOf(Double.parseDouble(a) - Double.parseDouble(b));
	}

	@GET
	@Path("/mult/{a}/{b}")
	@Produces(MediaType.TEXT_PLAIN)
	public String multiply(@PathParam("a") String a, @PathParam("b") String b) {
		return String.valueOf(Double.parseDouble(a) * Double.parseDouble(b));
	}

	@GET
	@Path("/divide/{a}/{b}")
	@Produces(MediaType.TEXT_PLAIN)
	public String divide(@PathParam("a") String a, @PathParam("b") String b) {
		return String.valueOf(Double.parseDouble(a) / Double.parseDouble(b));
	}

}
