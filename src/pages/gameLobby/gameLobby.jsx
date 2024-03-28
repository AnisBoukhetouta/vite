import AppConstants from "../../AppConstants";
import GameCard from "../../components/gameCard/card";

export default function GameLobby() {
  return <GameCard cardData={AppConstants.cardData} />;
}
