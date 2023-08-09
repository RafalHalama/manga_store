package com.mangastore.service;


import com.mangastore.dao.UserRepository;
import com.mangastore.dto.LoginDTO;
import com.mangastore.dto.LoginMessage;
import com.mangastore.dto.UserDTO;
import com.mangastore.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;



    public String addUser(UserDTO userDTO) {

        User user = new User(

                userDTO.getUserId(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword()),
                userDTO.getRole()
        );

        userRepository.save(user);

        return user.getUsername();
    }


    public LoginMessage loginEmployee(LoginDTO loginDTO) {
        String msg = "";
        User user1 = userRepository.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = this.passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {

                return new LoginMessage("password Not Match", false);
            }
        }else {
            return new LoginMessage("Email not exits", false);
        }


    }

}