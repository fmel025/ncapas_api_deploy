package com.group6.server.services;

import com.group6.server.models.entites.Category;
import com.group6.server.models.entites.Event;

import java.util.List;

public interface CategoryService {
    void save(Category category) throws Exception;

    void saveAll(List<Category> categoryList) throws Exception;

    void createAll(List<String> categories, Event event) throws Exception;

    List<Category> findAllByEvent(Event event);

    Category findOneById(Integer id);

    void deleteById(Integer code) throws Exception;
}
