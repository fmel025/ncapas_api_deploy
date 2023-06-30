package com.group6.server.services.implmentations;

import com.group6.server.models.dtos.Tier.CreateTiersDTO;
import com.group6.server.models.entites.Event;
import com.group6.server.models.entites.Tier;
import com.group6.server.repositories.TierRepository;
import com.group6.server.services.TierService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TierServiceImpl implements TierService {

    @Autowired
    private TierRepository tierRepository;

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void save(Tier tier) throws Exception {
        tierRepository.save(tier);
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public void saveAll(CreateTiersDTO dto, Event event) throws Exception {
        List<Tier> tiers = dto.getTiers().stream()
                .map(tier -> new Tier(tier.getName(), tier.getPrice(), tier.getCapacity(), event))
                .toList();

        tierRepository.saveAll(tiers);
    }

    @Override
    public List<Tier> findAllByEvent(Event event) {
        return tierRepository.findAllByEvent(event);
    }

    @Override
    public Tier findOneById(String id) {
        UUID code = UUID.fromString(id);
        return tierRepository
                .findById(code)
                .orElse(null);
    }
}
