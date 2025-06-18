// src/app/category/itch/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import GameCard from "../../../components/GameCard";
import { Section, H2, DivCard } from "../../../styles/ItchStyles";

interface ItchGame {
  id: number;    // 
  slug:  string;
  title: string;
  price: number;
  image: string;
  url:   string; // e traga também a URL de download
}

export default function Itch() {
  const [games, setGames] = useState<ItchGame[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/itch")
      .then((res) => res.json())
      .then((list: ItchGame[]) => setGames(list))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section>
      <H2>Jeux gratuits sur itch.io</H2>
      {loading ? (
        <p>Chargement de Itch.io…</p>
      ) : (
        <DivCard>
          {games.map((g) => (
            <GameCard
              key={g.id}
              game={{
                id:    g.id,   
                slug:  g.slug,   
                title: g.title,
                price: g.price,
                image: g.image,
                url:   g.url      // link de download vindo da API
              }}
            />
          ))}
        </DivCard>
      )}
    </Section>
  );
}
