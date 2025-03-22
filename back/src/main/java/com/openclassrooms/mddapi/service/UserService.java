package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.exception.BadRequestException;
import com.openclassrooms.mddapi.exception.NotFoundException;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.payload.request.SignupRequest;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(NotFoundException::new);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(NotFoundException::new);
    }

    public void create(SignupRequest signUpRequest) {
        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        userRepository.save(user);
    }

    public void update(UserDto userDto, User user) {
        if (userDto.getUsername() != null && !userDto.getUsername().isEmpty()) {
            user.setUsername(userDto.getUsername());
        }
        if (userDto.getEmail() != null && !userDto.getEmail().isEmpty()) {
            user.setEmail(userDto.getEmail());
        }
        if (userDto.getPassword() != null && !userDto.getPassword().isEmpty()) {
            user.setPassword(userDto.getPassword());
        }

        userRepository.save(user);
    }

    public Topic addSubscription(Long topicId, String username) {
        Topic topic = topicRepository.findById(topicId).orElseThrow(NotFoundException::new);
        User user = userRepository.findByUsername(username).orElseThrow(NotFoundException::new);

        boolean alreadySubscribed = user.getTopics().contains(topic);

        if (!alreadySubscribed) {
            user.getTopics().add(topic);
        } else {
            throw new BadRequestException();
        }

        userRepository.save(user);

        return topic;
    }

    public Topic deleteSubscription(Long topicId, String username) {
        Topic topic = topicRepository.findById(topicId).orElseThrow(NotFoundException::new);
        User user = userRepository.findByUsername(username).orElseThrow(NotFoundException::new);

        boolean alreadySubscribed = user.getTopics().contains(topic);

        if (alreadySubscribed) {
            user.getTopics().remove(topic);
        } else {
            throw new BadRequestException();
        }

        userRepository.save(user);

        return topic;
    }
}
