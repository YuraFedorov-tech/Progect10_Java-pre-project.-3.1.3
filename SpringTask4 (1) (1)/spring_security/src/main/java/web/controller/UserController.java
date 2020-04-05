package web.controller;

import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import web.config.model.User;
import web.service.UserService;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/")
public class UserController {


    User userEmpty = new User().setFirstName("111111111");


    final private
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping(value = "admin/add")
    public User addUser(User user, @RequestParam(required = false, name = "role_id") Long id, HttpServletRequest req) {

        userService.add(user, id);
//         Gson gson = new Gson();
//        String json = gson.toJson(newUser3, User.class);
//        System.out.println(json+ "addJSON11111111111111111111");
        return user;
    }

    @PostMapping(value = "admin/delete")
    public ResponseEntity<Object> deleteUser(@RequestParam(required = false, name = "idDelete") Long id

    ) {
        userService.delete(userService.findById(id));
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "admin/update")
    public User postUpdateUser(User user, @RequestParam(required = false, name = "RoleUpdateID") Long[] ids) {
        userService.update(user, ids);
        System.out.println(user + "update11111111111111111111");
        return user;
    }


    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String loginPage() {
        return "login";
    }


    @GetMapping(value = "user")
    public String seeUser(ModelMap modelMap, Authentication authentication) {
        //  modelMap.addAttribute("user",  authentication.getPrincipal());
        modelMap.addAttribute("user", userEmpty);
        return "seeUser";
    }
}