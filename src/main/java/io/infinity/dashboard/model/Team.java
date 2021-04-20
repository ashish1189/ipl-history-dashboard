package io.infinity.dashboard.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Team {

    @Id
    private long id;
    private String teamName;
    private long totalMatches;
    private long totalWins;
}
