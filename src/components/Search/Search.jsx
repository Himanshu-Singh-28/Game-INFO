import SearchBar from "@mkyy/mui-search-bar";
import { Card } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { RapidHeaders, UserContext } from "../../main";
import "./Search.css";
import SearchInformation from "./SearchInformation";
import {BeatLoader} from 'react-spinners'

const Search = () => {
  const [Value, setValue] = useState("Search Games...");
  const [searchVal,setSearchVal]=useState([]);
  const[appid,setAppid]=useState();
  const [found,setFound]=useState(true);
  const { isAuth } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [loading,setLoading]=useState();
  const ref = useRef(null);

  useEffect(()=>{
    if(ref.current!=null){
      ref.current.scrollIntoView({
        behavior:"smooth"
      });
    }
  },[show]);

  const HandleSearch = () => {
    axios.get(`https://steam-api7.p.rapidapi.com/autocomplete`, {
      params: {
        query: `${Value}`,
        limit: "10",
      },
      headers: RapidHeaders[1],
    }).then(({data})=>{
      setSearchVal(data.results);
      setLoading(false);
    }).catch(err=>{
      console.log(err);
      setFound(false);
      setLoading(false);
    });
  };

  const HandleCancleSearch=()=>{
    setSearchVal([]);
    setValue("Search Games..");
    setShow(false);
    setLoading(true);
  }
  const HandleClick = (id) => {
    if (!isAuth) {
      toast("Login First To View Details", {
        style: {
          color: "red",
          fontFamily:
            " Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
        },
      });
      return;
    }
    setShow(true);
    setAppid(id);
  };
  return (
    <>
      <div className="search-container">
        <div className="search-bar" onFocus={()=>setLoading(true)} onBlur={()=>{setLoading(false);setFound(true)}}>
          <SearchBar
            placeholder={Value}
            onChange={(newval) => setValue(newval)}
            onSearch={HandleSearch}
            onCancelResearch={HandleCancleSearch}
          />
        </div>
        {!loading && (
          <div className="search-result">
            {searchVal.map((item, idx) => {
              return (
                <div onClick={() => HandleClick(item.appid)} key={idx}>
                  <Card className="search-items">{item.name}</Card>
                </div>
              );
            })}
            {!found && (
              <Card className="search-items" style={{ color: "red" }}>
                No Game Found Enter Valid Name
              </Card>
            )}
          </div>
        )}
        {loading && (
          <div className="search-result">
            <Card className="search-items" style={{height:"80px",alignContent:"center"}}>
              <BeatLoader color="green" size={"20px"}/>
            </Card>
          </div>
        )}
      </div>
      {show && (
        <div ref={ref}>
          <SearchInformation appid={appid} />
        </div>
      )}
    </>
  );
};

export default Search;
