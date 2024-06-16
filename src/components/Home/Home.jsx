import React, { useEffect, useState } from "react";
import HeroHome from "../Hero/HeroHome";
import { homeData, Multiplayer, Rpg, Singleplayer } from "../../components/DummyData/dummyData";
import TagContainer from "../TagCards/TagContainer";
import Trending from "../Trending/Trending";
import axios from "axios";
import { API_KEY } from "../../main";

const Home = () => {
  const [items, setItems] = useState(homeData.results);
  const [multiplayer, setMultiplayer] = useState(Multiplayer.results);
  const [singleplayer, setSingleplayer] = useState(Singleplayer.results);
  const [rpg, setRPG] = useState(Rpg.results);
  const [trending, setTrending] = useState(homeData.results.slice(15,30));

 


    useEffect(() => {
      axios
        .get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=30`)
        .then((res) => {
          setItems(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${API_KEY}&tags=multiplayer&page=2&page_size=40`
        )
        .then((res) => {
          setMultiplayer(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${API_KEY}&tags=31&page=3&page_size=40`
        )
        .then((res) => {
          setSingleplayer(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);
 
    useEffect(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${API_KEY}&tags=24&page=4&page_size=40`
        )
        .then((res) => {
          setRPG(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${API_KEY}&page=10&page_size=20`
        )
        .then((res) => {
          setTrending(res.data.results);
        })
        .catch((err) => console.log(err));
    }, []);


    return (
      <>
        <HeroHome items={items} />
        <TagContainer items={multiplayer} title="Multiplayer Games" />
        <TagContainer items={singleplayer} title="Singleplayer Games" />
        <TagContainer items={rpg} title={"RPG Games"} />
        <Trending items={trending} />
        <TagContainer items={items} title={"Recomended Games"} />
      </>
    );
  }

export default Home;
