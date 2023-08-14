import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Modal from "react-bootstrap/Modal";
import logo from "../img/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Guests from "./Guests";
import vector from "../img/vector2.png";

function Mod({ uniqueCities, updateFamily, family, data, updateCity }) {
  const [show, setShow] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleShow = () => {
    setShow(!show);
  };
  const handleSearch = () => {
    const filteredData = data.filter(
      (item) => item.city === selectedCity && item.maxGuests >= family
    );
    setSearchResults(filteredData);
  };
  const handleCityChange = (city) => {
    setSelectedCity(city);
    // Llama a la función updateCity en el componente padre App
    updateCity(city);
  };

  console.log(searchResults);
  return (
    <div>
      <div className="btnMod">
        <img src={logo} alt="Win" className="logo" />
        <ButtonGroup aria-label="Basic example" className="modalgroup">
          <Button
            variant="secondary mt-5"
            className="btnCity"
            onClick={handleShow}
          >
            {selectedCity || "Whole,Finland"}
          </Button>
          <Button
            variant="secondary mt-5"
            className="btnAdd"
            onClick={handleShow}
          >
            {family || "Add Guests"}
          </Button>
          <Button
            variant="secondary mt-5"
            className="btnbusca"
            onClick={handleShow}
          >
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </div>

      <Modal
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
        className="ppal-modal"
      >
        <Modal.Header closeButton className="modalheader">
          <Modal.Title className="edit">Edit your search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ButtonGroup aria-label="Basic example" className="btnsMod">
            <Button variant="secondary" className="btnMod cityMod">
              <span className="span">Location</span>
              <br /> <span>{selectedCity || "City"}</span>
            </Button>
            <Button variant="secondary" className="btnMod guestMod">
              <span className="span">Guest</span>
              <br /> <span>{family}</span>
            </Button>
            {/* el botón hace el filtro pero pude pasar el valor
            al componente padre */}
            <Button
              variant="secondary"
              className="btnMod searchMod"
              onClick={() => {
                handleSearch(selectedCity);
                setShow(false);
              }}
            >
              <SearchIcon />
              Search
            </Button>
          </ButtonGroup>
          <div className="row">
            <div className="col-md-6">
              <div className="list-group vector">
                {uniqueCities.map((city, index) => (
                  <div key={index} className="city-item row align-items-center">
                    <div className="col-auto">
                      <img
                        src={vector}
                        alt="locatión"
                        className="mr-2"
                        style={{ width: "30px" }}
                      />
                    </div>
                    <div className="col ">
                      <a
                        className="list-group-item list-group-item-action cities liCity"
                        onClick={() => handleCityChange(city)}
                      >
                        {city}, Finland
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <Guests updateFamily={updateFamily} />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Mod;
