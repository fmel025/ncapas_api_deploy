package com.group6.server.services.implmentations;

import com.group6.server.models.entites.Category;
import com.group6.server.models.entites.Event;
import com.group6.server.repositories.CategoryRepository;
import com.group6.server.services.CategoryService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void save(Category category) throws Exception {
        categoryRepository.save(category);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void saveAll(List<Category> categoryList) throws Exception {
        categoryRepository.saveAll(categoryList);
    }

    @Override
    public void createAll(List<String> categories, Event event) throws Exception {
        List<Category> categoryList = categories.stream()
                .map(category -> new Category(category,event))
                .toList();

        this.saveAll(categoryList);
    }


    @Override
    public List<Category> findAllByEvent(Event event) {
        return categoryRepository.findAllByEvent(event);
    }

    @Override
    public Category findOneById(Integer id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void deleteById(Integer code) throws Exception {
        categoryRepository.deleteById(code);
    }
}
