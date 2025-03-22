package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.TopicDto;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.service.TopicService;
import com.openclassrooms.mddapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/topic")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @Autowired
    private UserService userService;

    @GetMapping("")
    public ResponseEntity<List<TopicDto>> findAllTopics(Principal principal) {
        List<Topic> topicList = topicService.findAll();
        List<TopicDto> topicDtoList = topicList.stream().map(t -> topicService.entityToDto(t, principal.getName())).toList();

        return ResponseEntity.ok(topicDtoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TopicDto> findById(@PathVariable("id") String id, Principal principal) {
        Topic topic = topicService.getTopicById(Long.valueOf(id));

        return ResponseEntity.ok(topicService.entityToDto(topic, principal.getName()));
    }

    @GetMapping("/user")
    public ResponseEntity<List<TopicDto>> findSubscribedTopicsByUser(Principal principal) {
        List<Topic> topicList = topicService.findSubscribedTopicsByUser(principal.getName());
        List<TopicDto> topicDtoList = topicList.stream().map(t -> topicService.entityToDto(t, principal.getName())).toList();

        return ResponseEntity.ok(topicDtoList);
    }

    @PostMapping("/{id}/subscribe")
    public ResponseEntity<?> subscribe(@PathVariable("id") String id, Principal principal) {
        Topic topic = userService.addSubscription(Long.valueOf(id), principal.getName());
        TopicDto topicDto = topicService.entityToDto(topic, principal.getName());

        return ResponseEntity.ok(topicDto);
    }

    @DeleteMapping("/{id}/unsubscribe")
    public ResponseEntity<?> unsubscribe(@PathVariable("id") String id, Principal principal) {
        Topic topic = userService.deleteSubscription(Long.valueOf(id), principal.getName());
        TopicDto topicDto = topicService.entityToDto(topic, principal.getName());

        return ResponseEntity.ok(topicDto);
    }
}
