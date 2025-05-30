package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.model.Comment;
import com.openclassrooms.mddapi.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/post/{id}/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping("")
    public ResponseEntity<List<CommentDto>> getCommentsByPostId(@PathVariable("id") String postId) {
        List<Comment> commentList = commentService.findAllByPost(Long.valueOf(postId));
        List<CommentDto> commentDtoList = commentList.stream().map(comment -> commentService.entityToDto(comment)).toList();

        return ResponseEntity.ok(commentDtoList);
    }

    @PostMapping("")
    public ResponseEntity<CommentDto> create(@PathVariable("id") String postId, @Valid @RequestBody CommentDto commentDto, Principal principal) {
        Comment comment = commentService.create(commentDto, Long.valueOf(postId), principal.getName());
        CommentDto commentResponse = commentService.entityToDto(comment);

        return ResponseEntity.ok(commentResponse);
    }
}
