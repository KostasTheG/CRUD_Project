package com.carpet.carpet.controller;

import com.carpet.carpet.exception.UserNotFoundException;
import com.carpet.carpet.model.User;
import com.carpet.carpet.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepo.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUser(){
        return userRepo.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepo.findById(id).orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepo.findById(id).map(user -> {
            user.setFirstname(newUser.getFirstname());
            user.setLastname(newUser.getLastname());
            user.setEmail(newUser.getEmail());
            user.setPhone(newUser.getPhone());
            user.setAddress(newUser.getAddress());
            user.setZipcode(newUser.getZipcode());
            return userRepo.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if (!userRepo.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepo.deleteById(id);
        return "User with id " + id + " has been deleted successfully!";
    }

}
