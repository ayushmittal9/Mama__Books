# Complete Spring Boot (Eclipse) + MySQL + React (VS Code) Integration Guide

Yeh guide aapko step-by-step sikhata hai ki aap **React Frontend (VS Code)** ko **Java Spring Boot Backend (Eclipse IDE)** aur **MySQL Database** ke saath kaise connect karein.

---

## 🏗️ Architecture Overview (Connections Kaise Hoti Hain)

```
+--------------------------------+       REST API Calls (Axios)      +-----------------------------------+       JDBC / JPA       +-----------------------+
|  React Frontend (VS Code)      |  -------------------------------> |  Spring Boot Backend (Eclipse)   |  --------------------> |  MySQL Server         |
|  http://localhost:5173         |  <------------------------------- |  http://localhost:8080            |  <-------------------  |  localhost:3306       |
+--------------------------------+          JSON Response            +-----------------------------------+                        |  Database: ecommerce_db|
                                                                                                                              +-----------------------+
```

1. **Frontend (React in VS Code)**: User interface chalta hai (`http://localhost:5173`). Jab user form submit karta hai (Signup, Login, Contact) ya products dekhta hai, toh **Axios** HTTP requests (`GET`, `POST`, etc.) bhejta hai Backend ko.
2. **Backend (Spring Boot in Eclipse)**: Server chalta hai (`http://localhost:8080`). Yeh **REST Controller** ke zariye request receive karta hai, **Service & Repository** layer ke dwara business logic handle karta hai.
3. **Database (MySQL)**: Database server chalta hai (`localhost:3306`). **Spring Data JPA (Hibernate)** automatic MySQL tables banata hai aur SQL queries execute karke data store/fetch karta hai.

---

## 🗄️ Step 1: MySQL Database Create Karna

1. MySQL Workbench ya Command Line open karein.
2. Database create karne ke liye command chalayein:

```sql
CREATE DATABASE ecommerce_db;
USE ecommerce_db;
```

---

## 🛠️ Step 2: Eclipse IDE me Spring Boot Maven Project Banayein

1. **Eclipse Open karein**:
   - Go to **File -> New -> Other...**
   - Search/Select **Spring Starter Project** (agar Spring Tools installed hai) ya **Maven Project**.
   - *Alternative (Sabse aasan tareeka)*: Browser me `https://start.spring.io` kholein.
     - **Project**: Maven
     - **Language**: Java
     - **Spring Boot**: 3.x.x
     - **Group**: `com.example`
     - **Artifact**: `ecommerce`
     - **Name**: `ecommerce`
     - **Package Name**: `com.example.ecommerce`
     - **Packaging**: Jar
     - **Java Version**: 17 ya 21
     - **Dependencies add karein**:
       - *Spring Web*
       - *Spring Data JPA*
       - *MySQL Driver*
     - **Generate** button par click karke zip file download karein aur extract karein.
2. **Eclipse me Project Import karein**:
   - Eclipse me jayein: **File -> Import... -> Maven -> Existing Maven Projects**.
   - Extracted folder select karke **Finish** dabayein.

---

## 📄 Step 3: `pom.xml` Check Karein

Aapki `pom.xml` me yeh key dependencies honi chahiye:

```xml
<dependencies>
    <!-- Spring Web for REST APIs -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Data JPA for Database operations -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- MySQL Driver -->
    <dependency>
        <groupId>com.mysql</groupId>
        <artifactId>mysql-connector-j</artifactId>
        <scope>runtime</scope>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

---

## ⚙️ Step 4: Database Configuration (`src/main/resources/application.properties`)

Open `src/main/resources/application.properties` in Eclipse and add:

```properties
# Server Port
server.port=8080

# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=your_mysql_password_here
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / Hibernate settings
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

> ⚠️ **Note**: `your_mysql_password_here` ki jagah apna MySQL root password likhein.

---

## 📁 Step 5: Package Structure in Eclipse

Eclipse me `src/main/java/com/example/ecommerce` ke andar yeh packages banayein:

- `com.example.ecommerce.config` (CORS Settings)
- `com.example.ecommerce.model` (Entities)
- `com.example.ecommerce.repository` (Database Handlers)
- `com.example.ecommerce.service` (Business Logic)
- `com.example.ecommerce.controller` (REST APIs)

---

## 💻 Step 6: Backend Code Files

### 1. CORS Configuration (Frontend Connection Allow Karein)
File: `src/main/java/com/example/ecommerce/config/WebConfig.java`

```java
package com.example.ecommerce.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173", "http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
```

---

### 2. User Module (Signup & Login)

#### Entity: `src/main/java/com/example/ecommerce/model/User.java`
```java
package com.example.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;
    private String mobile;

    public User() {}

    public User(String username, String email, String password, String mobile) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.mobile = mobile;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getMobile() { return mobile; }
    public void setMobile(String mobile) { this.mobile = mobile; }
}
```

#### Repository: `src/main/java/com/example/ecommerce/repository/UserRepository.java`
```java
package com.example.ecommerce.repository;

import com.example.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
```

#### Service: `src/main/java/com/example/ecommerce/service/UserService.java`
```java
package com.example.ecommerce.service;

import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists!");
        }
        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }
        throw new RuntimeException("Invalid email or password!");
    }
}
```

#### Controller: `src/main/java/com/example/ecommerce/controller/UserController.java`
```java
package com.example.ecommerce.controller;

import com.example.ecommerce.model.User;
import com.example.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            User savedUser = userService.registerUser(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        try {
            String email = credentials.get("email");
            String password = credentials.get("password");
            User user = userService.loginUser(email, password);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
```

---

### 3. Product Module

#### Entity: `src/main/java/com/example/ecommerce/model/Product.java`
```java
package com.example.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    private Double price;
    private String image;
    private Double rating;

    @Column(length = 1000)
    private String description;

    public Product() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
```

#### Repository: `src/main/java/com/example/ecommerce/repository/ProductRepository.java`
```java
package com.example.ecommerce.repository;

import com.example.ecommerce.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
}
```

#### Controller: `src/main/java/com/example/ecommerce/controller/ProductController.java`
```java
package com.example.ecommerce.controller;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
}
```

---

### 4. Contact Form Module

#### Entity: `src/main/java/com/example/ecommerce/model/Contact.java`
```java
package com.example.ecommerce.model;

import jakarta.persistence.*;

@Entity
@Table(name = "contacts")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    @Column(length = 2000)
    private String message;

    public Contact() {}

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
```

#### Repository: `src/main/java/com/example/ecommerce/repository/ContactRepository.java`
```java
package com.example.ecommerce.repository;

import com.example.ecommerce.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
```

#### Controller: `src/main/java/com/example/ecommerce/controller/ContactController.java`
```java
package com.example.ecommerce.controller;

import com.example.ecommerce.model.Contact;
import com.example.ecommerce.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public ResponseEntity<?> submitContact(@RequestBody Contact contact) {
        Contact saved = contactRepository.save(contact);
        return ResponseEntity.ok(saved);
    }
}
```

---

## 🚀 Step 7: Backend Run Karein (Eclipse)

1. Eclipse me `EcommerceApplication.java` file par Right Click karein.
2. Select **Run As -> Java Application** (ya **Spring Boot App**).
3. Console log me aapko dikhega: `Started EcommerceApplication in ... seconds (JVM running for ...)`.
4. Tomcat server **`http://localhost:8080`** par active ho jayega.

---

## 🔗 Step 8: Frontend (React in VS Code) se Spring Boot Connect Karna

Aapke React app mein `axios` already installed hai. Spring Boot APIs call karne ke liye neeche diye gaye examples dekhein:

### API Service Helper (`src/services/api.js`) Banayein:

```javascript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/users/signup`, userData);
};

export const loginUser = async (credentials) => {
  return await axios.post(`${API_BASE_URL}/users/login`, credentials);
};

export const fetchProducts = async () => {
  return await axios.get(`${API_BASE_URL}/products`);
};

export const sendContactMessage = async (contactData) => {
  return await axios.post(`${API_BASE_URL}/contact`, contactData);
};
```

---

## 🎯 Summary Checklist

| Component | Technology | URL / Location | Status Check |
|-----------|------------|----------------|--------------|
| **Database** | MySQL | `localhost:3306` (`ecommerce_db`) | Table auto create honge (`spring.jpa.hibernate.ddl-auto=update`) |
| **Backend** | Spring Boot | Eclipse IDE (`http://localhost:8080`) | Run As -> Java Application |
| **Frontend**| React (Vite)| VS Code (`http://localhost:5173`) | `npm run dev` |
| **Connection**| Axios + CORS | `http://localhost:8080/api/...` | `@CrossOrigin` allowed in Spring Boot |

Yeh complete flow configure karte hi aapka Frontend VS Code se Backend Eclipse aur MySQL DB ke saath 100% connect ho jayega!
