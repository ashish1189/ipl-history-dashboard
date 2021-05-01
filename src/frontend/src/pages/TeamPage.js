import { React, useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });

  useEffect(() => {
    const getMatches = async () => {
      const response = await fetch(
        "http://localhost:9091/team/Kings%20XI%20Punjab"
      );

      const data = await response.json();
      setTeam(data);
    };
    getMatches();
  }, []);

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      <MatchDetailCard match={team.matches[0]} />
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard match={match} />
      ))}
    </div>
  );
};
