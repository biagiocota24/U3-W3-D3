import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
// import Job from "./Job";
import { setDetailJob } from "../redux/reducers";
import { useEffect } from "react";
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs";

const JobDetails = function () {
  const job = useSelector((state) => state.main.job);
  const dispatch = useDispatch();
  const params = useParams();

  const 

  const callData = function () {
    fetch(baseEndpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setDetailJob(data.data.find((job) => job._id === params.id)));
      });
  };

  useEffect(() => {
    callData();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">
            Details for
            {job ? (
              <span className="text-warning fw-bold">{job.title}</span>
            ) : (
              <p>Caricamento...</p>
            )}
          </h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {job ? (
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          ) : (
            <p>Caricamento...</p>
          )}
          <Button>Scarta annuncio</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
