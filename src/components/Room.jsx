import React from "react";
import Card from "react-bootstrap/Card";
import StarIcon from "../img/star.png";

function Room({ data }) {
  return (
    <Card className="roomCard">
      <Card.Img
        variant="top"
        src={data.photo}
        style={{ objectFit: "cover", height: "12.5rem" }}
      />
      <Card.Body>
        <Card.Text>
          <div className="card-text">
            <span>
              {" "}
              {data.superHost == true ? (
                <button
                  type="button"
                  class="btnH btn-outline-secondary"
                  disabled
                >
                  superHost
                </button>
              ) : (
                ""
              )}{" "}
            </span>
            <span>
              {data.type} {data.beds} beds
            </span>
            <span className="redstar">
              <img className="starCard" src={StarIcon} alt="star" />
              {data.rating}
            </span>
          </div>
        </Card.Text>
        <Card.Title className="card-title">{data.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default Room;
