package ru.yura.web.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.yura.web.model.User;
import ru.yura.web.service.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/")
public class UserController {


    final private
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping(value = "admin/add")
    public User addUser(User user, @RequestParam(required = false, name = "role_id") Long id, HttpServletRequest req) {
        userService.add(user, id);
        return user;
    }

    @PostMapping(value = "admin/delete")
    public User deleteUser(@RequestParam(required = false, name = "idDelete") Long id , HttpServletResponse response) {
        User user = userService.findById(id);
        userService.delete(user);
        response.setStatus(400);
        return user;
    }

    @PostMapping(value = "admin/update")
    public User postUpdateUser(User user, @RequestParam(required = false, name = "role_id") Long[] ids) {
        User userUpdate= userService.update(user, ids);
        return userUpdate;
    }
}