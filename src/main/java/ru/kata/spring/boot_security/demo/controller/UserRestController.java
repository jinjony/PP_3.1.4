package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserServiceImp;

import java.security.Principal;

@RestController
@RequestMapping("/user")
public class UserRestController {
    private final UserServiceImp userServiceImp;

    @Autowired
    public UserRestController(UserServiceImp userServiceImp) {
        this.userServiceImp = userServiceImp;
    }

    @GetMapping("/info")
    public ResponseEntity<User> sayUsers(Principal principal) {
        return new ResponseEntity<>(userServiceImp.findByUsername(principal.getName()), HttpStatus.OK);
    }
}
