package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.service.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<?> getAllPosts(Principal principal) {
        List<Post> postList = postService.getUserFeed(principal);
        List<PostDto> postDtoList = postList.stream().map(post -> modelMapper.map(post, PostDto.class)).toList();

        return ResponseEntity.ok(postDtoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable("id") String id) {
        Post post = postService.getById(Long.valueOf(id));
        PostDto postDto = modelMapper.map(post, PostDto.class);

        return ResponseEntity.ok(postDto);
    }

    @PostMapping("")
    public ResponseEntity<?> createPost(@RequestBody PostDto postDto, Principal principal) {
        postService.createPost(postDto, principal);

        return ResponseEntity.ok().build();
    }

}
