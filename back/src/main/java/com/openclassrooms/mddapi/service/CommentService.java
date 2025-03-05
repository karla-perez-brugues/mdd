package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.model.Comment;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.CommentRepository;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    public void create(CommentDto commentDto, Long postId, Principal principal) {
        Post post = postRepository.findById(postId).orElseThrow();
        User user = userRepository.findByEmail(principal.getName()).orElseThrow();

        Comment comment = modelMapper.map(commentDto, Comment.class);
        comment.setPost(post);
        comment.setAuthor(user);

        commentRepository.save(comment);
    }

    public List<Comment> findAllByPost(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow();

        return post.getComments();
    }

}
