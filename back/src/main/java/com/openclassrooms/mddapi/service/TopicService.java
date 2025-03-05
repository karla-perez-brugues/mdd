package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Topic> findAll() {
        return topicRepository.findAll();
    }

    public Topic getTopicById(Long id) {
        return topicRepository.findById(id).orElse(null);
    }

    public List<Topic> findSubscribedTopicsByUser(Principal principal) {
        User user = userRepository.findByEmail(principal.getName()).orElse(null);

        // TODO: throw error
        assert user != null;

        return user.getTopics();
    }

}
