package com.openclassrooms.mddapi.service;

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

    public void addSubscription(Long topicId, String username) {
        Topic topic = topicRepository.findById(topicId).orElse(null);
        User user = userRepository.findByUsername(username).orElse(null);

        // TODO: if null throw error
        assert user != null;

        boolean alreadySubscribed = user.getTopics().contains(topic);

        if (!alreadySubscribed) {
            user.getTopics().add(topic);
        } // TODO: else throw error

        userRepository.save(user);
    }

    public void deleteSubscription(Long topicId, String username) {
        Topic topic = topicRepository.findById(topicId).orElse(null);
        User user = userRepository.findByUsername(username).orElse(null);

        // TODO: if null throw error
        assert user != null;

        boolean alreadySubscribed = user.getTopics().contains(topic);

        if (alreadySubscribed) {
            user.getTopics().remove(topic);
        } // TODO: else throw error

        userRepository.save(user);
    }
}
