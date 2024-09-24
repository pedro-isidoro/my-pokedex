import { useEffect, useState } from "react";
import axios from "axios";

export const usePokemons = (index) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      // Jogamos todas as infos dentro do endpoints array
      var endpoints = [];
      try {
        for (var i = 1; i <= index; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        // console.log(endpoints);
        //
        var response = axios
          .all(endpoints.map((endpoint) => axios.get(endpoint)))
          .then((res) => setDataList(res));
        // return response;
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, [index]);

  return { dataList, loading, error };
};

export const usePokemonAbility = (url) => {
  const [dataList, setDataList] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(url)
        .then((res) => {
          console.log(res.data.effect_entries[1].short_effect)
          setDataList(res.data.effect_entries[1].short_effect);
        });
    } catch (err) {
      console.log("Error: ", err);
    }
  }, [url]);
  // console.log("DataList: ", dataList)

  return { dataList, loading, error };
};