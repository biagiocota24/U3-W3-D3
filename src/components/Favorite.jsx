import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../redux/actions";

const ShowFavorite = function () {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Lista dei preferiti</h1>
        </Col>
        <Col xs={12}>
          {favorites.map((item) => {
            return (
              <ListGroup>
                <ListGroupItem>
                  <p>{item.title}</p>
                  <Button onClick={() => {
                    dispatch(removeFavorite(item._id))
                  }}>Rimuovi</Button>
                </ListGroupItem>
              </ListGroup>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default ShowFavorite;
