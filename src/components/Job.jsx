import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToFavorite } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Job = ({ data }) => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} className="d-flex justify-content-between align-items-center">
        <Link to={`/detail/${data._id}`}>{data.title}</Link>
        <Button
          onClick={() => {
            if (!favorites.some((fav) => fav._id === data._id)) {
              dispatch(addToFavorite(data));
            }
          }}
          variant={
            favorites.some((fav) => fav._id === data._id)
              ? "success"
              : "primary"
          }
        >
          {favorites.some((fav) => fav._id === data._id)
            ? "favorite"
            : "add to favorite"}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
