package com.group6.server.services.implmentations;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Organizer;
import com.group6.server.repositories.OrganizerRepository;
import com.group6.server.services.OrganizerService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrganizerServiceImpl implements OrganizerService {

    @Autowired
    private OrganizerRepository organizerRepository;

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void save(Organizer organizer) throws Exception {
        organizerRepository.save(organizer);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void saveAll(List<String> organizers, Event event) throws Exception {
        List<Organizer> organizerList = organizers.stream()
                .map(organizer -> new Organizer(organizer, event))
                .collect(Collectors.toList());

        organizerRepository.saveAll(organizerList);
    }

    @Override
    public Organizer findOneById(Integer id) {
        return organizerRepository.findById(id).orElse(null);
    }

    @Override
    public List<Organizer> findAllByEvent(Event event) {
        return organizerRepository.findAllByEvent(event);
    }
}
