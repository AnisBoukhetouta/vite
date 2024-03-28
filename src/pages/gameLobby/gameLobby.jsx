import Layout from "../../navigation/layout/layout";
import AppConstants from "../../AppConstants";
import GameCard from "../../components/gameCard/card";

export default function GameLobby () {
  return (
    <Layout>
      <GameCard cardData={AppConstants.cardData} />
    </Layout>
  );
}
