import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
// import { NotFoundError } from "../errors/customErrors";

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  // if (!job) {
  //   throw new NotFoundError(`no job with the id ${id}`);
  // }
  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, { new: true });

  // if (!job) {
  //   throw new NotFoundError(`no job with the id ${id}`);
  // }

  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);

  // if (!job) {
  //   throw new NotFoundError(`no job with the id ${id}`);
  // }

  res.status(StatusCodes.OK).json({ job });
};

export { getAllJobs, createJob, getJob, updateJob, deleteJob };
