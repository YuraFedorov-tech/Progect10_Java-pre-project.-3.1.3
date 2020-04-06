package web.controller;

import com.google.gson.Gson;
import org.springframework.security.core.Authentication;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import web.model.Role;
import web.model.User;
import web.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

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
    public User deleteUser(@RequestParam(required = false, name = "idDelete") Long id) {
        User user = userService.findById(id);
        userService.delete(user);
        return user;
    }

    @PostMapping(value = "admin/update")
    public User postUpdateUser(User user, @RequestParam(required = false, name = "role_id") Long[] ids) {
        userService.update(user, ids);
        return user;
    }
}