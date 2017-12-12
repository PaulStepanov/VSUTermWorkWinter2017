//package vsu.by.awesomeProject.configuration;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.env.Environment;
//import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
//import org.springframework.jdbc.datasource.DriverManagerDataSource;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.JpaVendorAdapter;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//import java.util.Properties;
//
//@Configuration
//@EnableTransactionManagement
//public class JPAConfig {
//    @Autowired
//    private Environment env;
//
//    @Bean
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
//        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
//        em.setDataSource(dataSource());
//        em.setPackagesToScan("vsu.by.awesomeProject.DAO");
//
//        JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
//        em.setJpaVendorAdapter(vendorAdapter);
//        em.setJpaProperties(additionalProperties());
//
//        return em;
//    }
//
//    @Bean
//    public DataSource dataSource() {
//        DriverManagerDataSource dataSource = new DriverManagerDataSource();
//        Properties props = dataSourceProperties();
//        dataSource.setDriverClassName(props.getProperty("driver-class-name"));
//        dataSource.setUrl(props.getProperty("url"));
//        dataSource.setUsername(props.getProperty("username"));
//        dataSource.setPassword(props.getProperty("password"));
//        return dataSource;
//    }
//
//
//    @Bean
//    public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
//        JpaTransactionManager transactionManager = new JpaTransactionManager();
//        transactionManager.setEntityManagerFactory(emf);
//
//        return transactionManager;
//    }
//
//    @Bean
//    public PersistenceExceptionTranslationPostProcessor exceptionTranslation() {
//        return new PersistenceExceptionTranslationPostProcessor();
//    }
//
//    Properties additionalProperties() {
//        Properties properties = new Properties();
//        properties.setProperty("hibernate.hbm2ddl.auto", env.getProperty("hibernate.hbm2ddl.auto"));
//        properties.setProperty("hibernate.dialect", env.getProperty("hibernate.dialect"));
//        return properties;
//    }
//
//    Properties dataSourceProperties() {
//        Properties properties = new Properties();
//        properties.setProperty("url", env.getProperty("spring.datasource.url"));
//        properties.setProperty("username", env.getProperty("spring.datasource.username"));
//        properties.setProperty("password", env.getProperty("spring.datasource.password"));
//        properties.setProperty("driver-class-name", env.getProperty("spring.datasource.driver-class-name"));
//        return properties;
//    }
//}
