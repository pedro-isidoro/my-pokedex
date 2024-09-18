import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import { addPokemons } from "./components/redux/pokemonCart/slice";
import { usePokemons } from "./components/hook/pokemonsRequest";

function App() {
  const dispatch = useDispatch();

  // dispatch(addPokemons(pokemonList));
  const { dataList } = usePokemons(60);
  // console.log(dataList);
  // console.log(dataList[0].data);

  function handlePokemons(){
    dispatch(addPokemons(dataList));
  }
  handlePokemons();
  
  return (
    <div className="w-full h-full bg-mobileHome sm:bg-home bg-cover bg-center">
      <Header />
      <div>
        <Outlet />;
      </div>
      <Footer />
    </div>
  );
}

export default App;
