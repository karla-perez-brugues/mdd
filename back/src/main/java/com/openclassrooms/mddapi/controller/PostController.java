package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("")
    public ResponseEntity<List<PostDto>> getAllPosts(Principal principal) {
        List<Post> postList = postService.getUserFeed(principal.getName());
        List<PostDto> postDtoList = postList.stream().map(post -> postService.entityToDto(post)).toList();

        return ResponseEntity.ok(postDtoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable("id") String id) {
        Post post = postService.getById(Long.valueOf(id));
        PostDto postDto = postService.entityToDto(post);

        return ResponseEntity.ok(postDto);
    }

    @PostMapping("")
    public ResponseEntity<?> createPost(@Valid @RequestBody PostDto postDto, Principal principal) {
        postService.createPost(postDto, principal.getName());

        return ResponseEntity.ok().build();
    }

}
