package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.exception.NotFoundException;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    private ModelMapper modelMapper;

    public void createPost(PostDto postDto, String username) {
        User author = userRepository.findByUsername(username).orElseThrow(NotFoundException::new);
        Topic topic = topicRepository.findById(postDto.getTopicId()).orElseThrow(NotFoundException::new);

        Post post = modelMapper.map(postDto, Post.class);
        post.setAuthor(author);
        post.setTopic(topic);

        postRepository.save(post);
    }

    public Post getById(Long id) {
        return postRepository.findById(id).orElseThrow(NotFoundException::new);
    }

    public List<Post> getUserFeed(String username) {
        User user = userRepository.findByUsername(username).orElseThrow(NotFoundException::new);
        List<Topic> subscribedTopics = user.getTopics();
        List<Post> posts = new ArrayList<>();

        for (Topic topic : subscribedTopics) {
            posts.addAll(topic.getPosts());
        }

        posts.sort(Comparator.comparing(Post::getUpdatedAt).reversed());

        return posts;
    }

    public PostDto entityToDto(Post post) {
        PostDto postDto = modelMapper.map(post, PostDto.class);
        postDto.setAuthor(post.getAuthor().getUsername());

        return postDto;
    }
}
