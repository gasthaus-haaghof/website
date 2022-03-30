package de.gasthaushaaghof.gasthaushaaghof;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GasthausHaaghofApplication {

	public static void main(String[] args) {
		SpringApplication.run(GasthausHaaghofApplication.class, args);
	}

	@Autowired
	void configureObjectMapper(final ObjectMapper mapper) {
		mapper.registerModule(new JavaTimeModule());
	}
}
