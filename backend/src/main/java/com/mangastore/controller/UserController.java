package com.mangastore.controller;

import com.mangastore.dto.LoginDTO;
import com.mangastore.dto.LoginMessage;
import com.mangastore.dto.UserDTO;
import com.mangastore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/user/save")
    public String saveEmployee(@RequestBody UserDTO userDTO)
    {
        return userService.addUser(userDTO);
    }
    @PostMapping("/user/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginMessage loginMessage = userService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }

    @GetMapping("/orderHistory")
    public ResponseEntity<?> getOrders(@RequestParam String email){
        return  ResponseEntity.ok(this.userService.getOrders(email));
    }
}