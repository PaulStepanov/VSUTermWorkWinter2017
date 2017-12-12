package vsu.by.awesomeProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@EnableAutoConfiguration(
		exclude={HibernateJpaAutoConfiguration.class,
		LiquibaseAutoConfiguration.class,
		DataSourceTransactionManagerAutoConfiguration.class})
@PropertySource({"classpath:application.properties"})
public class AwesomeApplication {
	public static void main(String[] args) {
		SpringApplication.run(AwesomeApplication.class, args);
	}
}
