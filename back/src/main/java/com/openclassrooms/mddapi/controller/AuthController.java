package com.openclassrooms.mddapi.controller;

import javax.validation.Valid;

import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.exception.BadRequestException;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.payload.request.LoginRequest;
import com.openclassrooms.mddapi.payload.request.SignupRequest;
import com.openclassrooms.mddapi.payload.response.JwtResponse;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.security.JwtUtils;
import com.openclassrooms.mddapi.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", maxAge = 3600)
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);
        User user = (User) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(
                jwt,
                user.getId(),
                user.getEmail()
        ));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userService.findByEmail(signUpRequest.getEmail()) != null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Erreur: Cet email est déjà pris !"));
        }

        if (userService.findByUsername(signUpRequest.getUsername()) != null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Erreur: Ce nom d'utilisateur est déjà pris !"));
        }

        // Create new user's account
        userService.create(signUpRequest);

        return ResponseEntity.ok(new MessageResponse("Compte créé avec succès !"));
    }

    @GetMapping("/me")
    public ResponseEntity<UserDto> me(Authentication authentication) {
        try {
            User user = (User) authentication.getPrincipal();
            UserDto userDto = modelMapper.map(user, UserDto.class);

            return ResponseEntity.ok(userDto);
        } catch (Exception e) {
            throw new BadRequestException();
        }
    }

}
