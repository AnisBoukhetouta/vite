import React, { useEffect } from "react";
import classes from "./test.module.css";
import Container from "@mui/material/Container";
import axios from "axios";
import GameCards from "../../components/gameCards/gameCards";

interface Item {
  _id: string;
  imageOut: string;
  imageOver: string;
}

interface Data {
  _id: string;
  files: {
    category: string;
    controls: string;
    description: string;
    destination: string;
    enCoding: string;
    fieldName: string;
    fileName: string;
    gameTitle: string;
    gameType: string;
    mimeType: string;
    originalName: string;
    path: string;
    size: string;
    tags: string;
    __v: string;
    _id: string;
  }[];
}

const test = () => {
  const [fetchedData, setFetchedData] = React.useState<Data[]>([]);
  const items: Item[] = [];

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
          .get("http://localhost:5000/files")
          .then((response) => {
            setFetchedData(response.data);
            console.log("FetchedData~~~~~~", response.data);
          })
          .catch((error) => console.log(error));
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, []);

  fetchedData.map((data, index) => {
    items.push({
      _id: data._id,
      imageOut: `http://localhost:5000/${data.files[0].destination}/${data.files[0].fileName}`,
      imageOver: `http://localhost:5000/${data.files[0].destination}/${data.files[2].fileName}`,
    });
  });

  return (
    <Container
      maxWidth="lg"
      style={{
        paddingTop: "4rem",
      }}
      className={classes.testContainer}
    >
      <GameCards cardData={items} />
    </Container>
  );
};

export default test;
