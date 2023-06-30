package com.group6.server.services.implmentations;

import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Sponsor;
import com.group6.server.repositories.SponsorRepository;
import com.group6.server.services.SponsorService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SponsorServiceImpl implements SponsorService {

    @Autowired
    private SponsorRepository sponsorRepository;

    @Override
    public void save(Sponsor sponsor, Event event) {

    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void saveAll(List<String> sponsors, Event event) throws Exception {
        List<Sponsor> sponsorList = sponsors.stream()
                .map(sponsor -> new Sponsor(sponsor, event))
                .collect(Collectors.toList());

        sponsorRepository.saveAll(sponsorList);
    }
}
