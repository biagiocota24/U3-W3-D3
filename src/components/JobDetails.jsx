import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const JobDetails = function () {
  const jobs = useSelector((state) => state.main.jobs);
  const params = useParams();

  const job = jobs.filter((job) => job._id === params.id);
  console.log("lavoro in dettagio", job);

  return <div>
    <h1>{job.title}</h1>
  </div>;
};

export default JobDetails;
