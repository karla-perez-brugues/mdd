package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.TopicDto;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.service.TopicService;
import com.openclassrooms.mddapi.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/topic")
public class TopicController { // TODO: add try catches

    @Autowired
    private TopicService topicService;

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<List<TopicDto>> findAllTopics() {
        List<Topic> topicList = topicService.findAll();
        List<TopicDto> topicDtoList = topicList.stream().map(t -> modelMapper.map(t, TopicDto.class)).toList();

        return ResponseEntity.ok(topicDtoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicDto> findById(@PathVariable("id") String id) {
        Topic topic = topicService.getTopicById(Long.valueOf(id));

        return ResponseEntity.ok(modelMapper.map(topic, TopicDto.class));
    }

    @GetMapping("/user")
    public ResponseEntity<List<TopicDto>> findSubscribedTopicsByUser(Principal principal) {
        List<Topic> topicList = topicService.findSubscribedTopicsByUser(principal);
        List<TopicDto> topicDtoList = topicList.stream().map(t -> modelMapper.map(t, TopicDto.class)).toList();

        return ResponseEntity.ok(topicDtoList);
    }

    @GetMapping("/{id}/subscribe")
    public ResponseEntity<?> subscribe(@PathVariable("id") String id, Principal principal) {
        userService.addSubscription(Long.valueOf(id), principal);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}/unsubscribe")
    public ResponseEntity<?> unsubscribe(@PathVariable("id") String id, Principal principal) {
        userService.deleteSubscription(Long.valueOf(id), principal);

        return ResponseEntity.ok().build();
    }
}
