package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserServiceImp;
import java.util.List;



@RestController
@RequestMapping("/api")
public class AdminRestController {
    private final UserServiceImp userServiceImp;
    @Autowired
    public AdminRestController(UserServiceImp userServiceImp) {
        this.userServiceImp = userServiceImp;
    }
    @GetMapping("/users/role")
    public ResponseEntity<List<Role>> getRole() {
        return ResponseEntity.ok().body(userServiceImp.getAllRoles());
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return  ResponseEntity.ok().body(userServiceImp.findAll());
    }

    @GetMapping("/users/get/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(userServiceImp.findById(id));
    }

    @PutMapping("/users/edit")
    public ResponseEntity<User> editUser(@RequestBody User user) {
        userServiceImp.update(user);
       return ResponseEntity.ok().body(user);
    }

    @PostMapping("/users/new")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        userServiceImp.saveUser(user);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/users/delete/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable("id") Long id) {
        userServiceImp.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
