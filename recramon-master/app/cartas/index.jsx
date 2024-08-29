import React, { useState } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';


const cardImages = {
  MagoNegro: require('../../assets/images/magonegro.png'),
  Exodia: require('../../assets/images/exodia.png'),
  Rei_Caveira: require('../../assets/images/ReiCaveira.png'),
  Bebe_Dragao: require('../../assets/images/dragaobb.png'),
};

const App = () => {
  const [playerCard, setPlayerCard] = useState(null);
  const [opponentCard, setOpponentCard] = useState(null);
  const [winner, setWinner] = useState('');

  const cards = [
    { name: 'MAGO', attack: 2500, image: cardImages.MagoNegro },
    { name: 'EXODIA', attack: 8000, image: cardImages.Exodia },
    { name: 'REI_CAVEIRA', attack: 3500, image: cardImages.Rei_Caveira },
    { name: 'DRAGAO_BEBE', attack: 1000, image: cardImages.Bebe_Dragao },
    
  ];

  const drawCard = () => {
    const randomCardIndex = Math.floor(Math.random() * cards.length);
    return cards[randomCardIndex];
  };

  const playRound = () => {
    const playerDraw = drawCard();
    const opponentDraw = drawCard();
    
    setPlayerCard(playerDraw);
    setOpponentCard(opponentDraw);
    
    if (playerDraw.attack > opponentDraw.attack) {
      setWinner( [playerDraw.name," Ganhou !"]);
    } else if (playerDraw.attack < opponentDraw.attack) {
      setWinner([opponentDraw.name," Ganhou !"]);
    } else {
      setWinner('Empate!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo Das Cartas Yu-Gi-OH</Text>
      <View style={styles.row}>
        <View style={styles.card}>
          {playerCard && <Image source={playerCard.image} style={styles.cardImage} />}
          <Text style={styles.cardText}>{playerCard?.name || 'Sua Carta'}</Text>
          <Text style={styles.cardText}>Ataque: {playerCard?.attack || '0'}</Text>
        </View>
        <View style={styles.card}>
          {opponentCard && <Image source={opponentCard.image} style={styles.cardImage} />}
          <Text style={styles.cardText}>{opponentCard?.name || 'Carta do Oponente'}</Text>
          <Text style={styles.cardText}>Ataque: {opponentCard?.attack || '0'}</Text>
        </View>
      </View>
      <Button title="Batalhar !" onPress={playRound} />
      <Text style={styles.result}>{winner}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  card: {
    margin: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 200,
    height: 280,
  },
  cardText: {
    fontSize: 18,
    marginTop: 7,
  },
  result: {
    fontSize: 25,
    marginTop:25,
  },
});

export default App;
