package io.infinity.dashboard.data;

import org.springframework.batch.item.ItemProcessor;

import io.infinity.dashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {
    
    @Override
    public Match process(final MatchInput matchInput) throws Exception {
        
    }
}
