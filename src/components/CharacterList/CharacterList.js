/* eslint-disable react/prop-types */
import React from 'react';

import CharacterThumbnail from '../Character/CharacterThumbnail';
import CharacterAPIService from '../../services/characters-api-service';
import CharacterListContext from '../../contexts/CharacterListContext';

class CharacterList extends React.Component {

  static contextType = CharacterListContext;

  async componentDidMount() {
    try {
      const characters = await CharacterAPIService.getAllCharacters();
      this.context.setCharactersList(characters);
    }
    catch (e) {
      console.error(e);
      this.context.setError(e);
    }
  }

  render() {
    const characters = this.context.characters.map((character, index) => {
      return (
        <CharacterThumbnail
          key={index}
          charId={character.charId}
          charName={character.charName}
          charRace={character.charRace}
          charClass={character.charClass}
          charDesc={character.charDesc}
        />
      );
    });
    return (
      <div className='CharacterList'>
        {characters}
      </div>
    );
  }
}

export default CharacterList;
