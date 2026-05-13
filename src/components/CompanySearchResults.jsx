import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setJobs } from "../redux/reducers";

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.main.jobs);
  const dispatch = useDispatch();
  const params = useParams();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("jobs aggiornati:", jobs);
  }, [jobs]);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);

      if (response.ok) {
        const { data } = await response.json();

        dispatch(setJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log("errore:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
