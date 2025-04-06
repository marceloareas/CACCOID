package br.com.cefet.caccoId.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form")
public class FormController {

    @GetMapping("hello-world")
    public String helloWorld() {
        return "Hello World!";
    }
}
