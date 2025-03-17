package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TopicRepository topicRepository;

    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
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
        Topic topic = topicRepository.findById(topicId).orElse(null);
        User user = userRepository.findByUsername(username).orElse(null);

        // TODO: if null throw error
        assert user != null;

        boolean alreadySubscribed = user.getTopics().contains(topic);

        if (!alreadySubscribed) {
            user.getTopics().add(topic);
        } // TODO: else throw error

        userRepository.save(user);

        return topic;
    }

    public Topic deleteSubscription(Long topicId, String username) {
        Topic topic = topicRepository.findById(topicId).orElse(null);
        User user = userRepository.findByUsername(username).orElse(null);

        // TODO: if null throw error
        assert user != null;

        boolean alreadySubscribed = user.getTopics().contains(topic);

        if (alreadySubscribed) {
            user.getTopics().remove(topic);
        } // TODO: else throw error

        userRepository.save(user);

        return topic;
    }
}
