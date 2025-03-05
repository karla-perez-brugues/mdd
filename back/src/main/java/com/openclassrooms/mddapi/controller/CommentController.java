package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.model.Comment;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/post/{id}/comment")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("")
    public ResponseEntity<List<CommentDto>> getCommentsByPostId(@PathVariable("id") String postId) {
        List<Comment> commentList = commentService.findAllByPost(Long.valueOf(postId));
        List<CommentDto> commentDtoList = commentList.stream().map(comment -> modelMapper.map(comment, CommentDto.class)).toList();

        return ResponseEntity.ok(commentDtoList);
    }

    @PostMapping("")
    public ResponseEntity<MessageResponse> create(@PathVariable("id") String postId, @RequestBody CommentDto commentDto, Principal principal) {
        commentService.create(commentDto, Long.valueOf(postId), principal);

        return ResponseEntity.ok(new MessageResponse("Comment sent successfully !"));
    }
}
