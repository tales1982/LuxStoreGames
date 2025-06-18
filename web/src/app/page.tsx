// src/app/page.tsx
"use client";
import React from "react";
import {
  Container,
  Hero,
  Title,
  Subtitle,
  CTAButton,
  Features,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  About,
  AboutTitle,
  AboutText
} from "@/styles/HomeStyles";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Title>Lux Store Games</Title>
        <Subtitle>
          Jouez gratuitement à une sélection incroyable de jeux indépendants
          avec notre token <strong>GAM</strong>.  
          Gagnez des GAM en répondant à des quizz, participez à la communauté
          et débloquez des liens exclusifs pour télécharger vos titres favoris.
        </Subtitle>
        <CTAButton href="/earn">Gagnez vos premiers GAM</CTAButton>
      </Hero>

      <Features>
        <FeatureCard>
          <FeatureIcon>🎮</FeatureIcon>
          <FeatureTitle>Explorer</FeatureTitle>
          <FeatureText>
            Parcourez les catégories de jeux gratuits sur Itch.io, Steam et Epic.
            Choisissez vos favoris et préparez-vous à jouer.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>💰</FeatureIcon>
          <FeatureTitle>Gagner des Tokens</FeatureTitle>
          <FeatureText>
            Répondez à de simples quizz dans la section « Gagnez des GAM »
            pour recevoir des tokens directement sur votre portefeuille MetaMask.
          </FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🔓</FeatureIcon>
          <FeatureTitle>Débloquer</FeatureTitle>
          <FeatureText>
            Utilisez vos GAM pour débloquer des liens de téléchargement.
            Votre token sert de clé d’accès !
          </FeatureText>
        </FeatureCard>
      </Features>

      <About>
        <AboutTitle>À propos de ce projet</AboutTitle>
        <AboutText>
          Ce DApp a été développé dans le cadre de mon portfolio : j’utilise
          Next.js et Solidity pour créer une boutique décentralisée de jeux
          gratuits. Ici, des tokens ERC-20 (GAM) sont utilisés comme moyen de
          paiement symbolique pour débloquer du contenu de manière ludique et sécurisée.
        </AboutText>
      </About>
    </Container>
  );
}
