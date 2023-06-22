package com.group6.server.services;

import com.group6.server.models.dtos.ProfileResponseDTO;
import com.group6.server.models.dtos.SignInGoogleDTO;
import com.group6.server.models.dtos.SignInDTO;
import com.group6.server.models.entites.User;

import java.util.List;

public interface UserService {
    //compare password method
    boolean comparePassword(String password, String hashedPassword);

    //find by one id method
    User findById(String id);  //the id is the code of the user

    void updateUser(User user) throws Exception;

    //find by one username o email method
    User findByUsernameOrEmail(String identifier); // identifier is username or email

    //get all users
    List<User> getAllUsers();

    //change username method
    User setPassword(String password, User user) throws Exception;

    ProfileResponseDTO getUserProfile(User user);
}