package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.dto.TopicDto;
import com.openclassrooms.mddapi.exception.NotFoundException;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<Topic> findAll() {
        return topicRepository.findAll();
    }

    public Topic getTopicById(Long id) {
        return topicRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public List<Topic> findSubscribedTopicsByUser(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(NotFoundException::new);

        return user.getTopics();
    }

    public TopicDto entityToDto(Topic topic, String username) {
        User user = userRepository.findByUsername(username).orElseThrow(NotFoundException::new);
        TopicDto topicDto = modelMapper.map(topic, TopicDto.class);

        if (user.getTopics().contains(topic)) {
            topicDto.setSubscribed(true);
        }

        return topicDto;
    }

}
