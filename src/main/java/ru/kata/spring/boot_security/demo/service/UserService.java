package ru.kata.spring.boot_security.demo.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.model.Role;
import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;
import java.util.Set;

public interface UserService extends UserDetailsService {
    User findById(Long id);

    List<User> findAll();

    void saveUser(User user);

    void deleteById(long id);

    User findByUsername(String username);

    UserDetails loadUserByUsername(String username);

    Set<Role> findByRoleName(String role);

    List<Role> getAllRoles();

    void update(User upUser);
}
