import { useEffect, useState } from "react";
import Room from "./components/Room";
import Mod from "./components/Mod";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);
  const [uniqueCities, setUniqueCities] = useState(new Set());
  const [family, setFamily] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");

  const updateCity = (city) => {
    setSelectedCity(city);
  };

  const updateFamily = (adulto, child) => {
    setFamily(adulto + child);
  };

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
    getData();
  }, []);

  // muestra la lista ya limpia sin repetir nombres
  useEffect(() => {
    data.forEach((el) => {
      setUniqueCities((prevCities) => new Set([...prevCities, el.city]));
    });
  }, [data]);

  const filteredData = data.filter(
    (item) => item.city === selectedCity && item.maxGuests >= family
  );

  // Puedes ver la variable data en consola.
  // console.log(data);

  return (
    <div className="cards">
      <div>
        <Mod
          uniqueCities={Array.from(uniqueCities)}
          family={family}
          updateFamily={updateFamily}
          data={data}
          updateCity={updateCity}
          selectedCity={selectedCity}
        />
      </div>
      <div className="roomscity d-flex justify-content-between">
        <h1 className="placeBar">
          {selectedCity
            ? `${selectedCity}, Stay in Finland`
            : "Stay in Finland"}
        </h1>
        <span className="numplaceBar">{family == 0 ? 12 : family}+ stay</span>
      </div>
      <div>
        <div className="row mb-4">
          {filteredData.length === 0
            ? data.map((item, index) => (
                <div key={index} className="col-4 mb-4">
                  <Room data={item} />
                </div>
              ))
            : filteredData.map((item, index) => (
                <div key={index} className="col-4 mb-4">
                  <Room data={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
