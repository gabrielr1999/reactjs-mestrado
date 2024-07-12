import React from 'react';
import logo from '../assets/images/png/Rick-And-Morty-Logo.png';  // Altere para o caminho correto da sua imagem
import fullImage from '../assets/images/jpg/rick-and-morty-wallpaper.jpg';  // Altere para o caminho correto da sua imagem

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="text-container">
        <div className="heading">
          <h1>Exploring the Depths of the Multiverse: The Genius and Chaos of "Rick and Morty"</h1>
          <span className="heading-border"></span>
        </div>
        <p>
        "Rick and Morty" is a series that defies the conventions of animation by exploring complex themes through a deeply humorous lens. The dynamic between Rick, a 
        cynical genius who despises authority and social conventions, and Morty, an anxious and morally sensitive teenager, creates a fascinating contrast that drives 
        the narrative. The show not only toys with concepts of time travel, alternate realities, and advanced technology but also delves into existential questions such 
        as the search for meaning in an apparently indifferent universe. The combination of sharp writing, witty dialogue, and vibrant animation makes "Rick and Morty" a 
        unique television experience, attracting a dedicated fan base and influencing contemporary pop culture with its satirical humor and biting critiques.
        </p>
        <img src={fullImage} alt="All 10 Naruto tailed beasts" className="full-width-image" />
      </div>
    </header>
  );
}

export default Header;
