package com.jimin.portfolio.global.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("https://jimin-portfolio.vercel.app") // 배포 주소
                .allowedMethods("GET", "POST")
                .allowCredentials(false);
    }
}
