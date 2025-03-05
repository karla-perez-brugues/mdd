package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.model.Comment;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.*;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private CommentService commentService;

    @Autowired
    private ModelMapper modelMapper;

    public void createPost(PostDto postDto, Principal principal) {
        User author = userRepository.findByEmail(principal.getName()).orElseThrow();
        Topic topic = topicRepository.findById(postDto.getTopicId()).orElseThrow();

        Post post = modelMapper.map(postDto, Post.class);
        post.setAuthor(author);
        post.setTopic(topic);

        postRepository.save(post);
    }

    public Post getById(Long id) {
        return postRepository.findById(id).orElseThrow();
    }

    public Comment addComment(Long postId, CommentDto commentDto, Principal principal) {
        Post post = postRepository.findById(postId).orElseThrow();
        User user = userRepository.findByEmail(principal.getName()).orElse(null);

        return commentService.create(commentDto, post, user);
    }

    public List<Post> getUserFeed(Principal principal) {
        User user = userRepository.findByEmail(principal.getName()).orElseThrow();
        List<Topic> subscribedTopics = user.getTopics();
        List<Post> posts = new ArrayList<>();

        for (Topic topic : subscribedTopics) {
            posts.addAll(topic.getPosts());
        }

        posts.sort(Comparator.comparing(Post::getUpdatedAt).reversed());

        return posts;
    }
}
