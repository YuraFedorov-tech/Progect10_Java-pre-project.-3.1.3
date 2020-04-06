package web.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import web.service.UserService;

/*
 *
 *@Data 04.04.2020
 *@autor Fedorov Yuri
 *@project spring_security
 *
 */

@Controller
public class UserControllerOld {
    final private
    UserService userService;

    public UserControllerOld(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "admin/admin")
    public String getAdminPanel(ModelMap modelMap, Authentication authentication) {
        modelMap.addAttribute("user", authentication.getPrincipal());
        modelMap.addAttribute("users", userService.findAll());
        return "crud";
    }

    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String loginPage() {
        return "login";
    }

    @GetMapping(value = "user")
    public String seeUser(ModelMap modelMap, Authentication authentication) {
        modelMap.addAttribute("user", authentication.getPrincipal());
        return "seeUser";
    }
}