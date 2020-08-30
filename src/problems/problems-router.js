const express = require("express");

const ProblemsService = require("./problems-service");
const problemRouter = express.Router();
const jsonParser = express.json();

problemRouter
  .route("/")
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    ProblemsService.getAllProblems(knexInstance)
      .then((problems) => {
        res.json(problems);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const knexInstance = req.app.get("db");
    const { problem } = req.body;

    const newProblem = { problem };
    console.log(newProblem);

    for (const [key, value] of Object.entries(newProblem)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` },
        });
      }
    }

    ProblemsService.insertProblem(knexInstance, newProblem)
        .then((problem) => {
            res
            .status(201)
            .location(req.originalUrl + `/${problem.id}`)
            .json(problem);
        })
        .catch(next);
});

//get, update, or delete specific event
problemRouter
  .route("/:id")
  .all((req, res, next) => {
    const knexInstance = req.app.get("db");
    const problemId = req.params.id;

    ProblemsService.getProblemById(knexInstance, problemId)
      .then((problem) => {
        if (!problem) {
          return res.status(404).json({
            error: { message: `Problem doesn't exist` },
          });
        }
        res.problem = problem;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(res.problem);
  })
  .delete((req, res, next) => {
    const knexInstance = req.app.get("db");
    const deleteProblemId = req.params.id;
    console.log(deleteProblemId)
    ProblemsService.deleteProblem(knexInstance, deleteProblemId)
      .then(() => res.status(204).end())
      .catch(next);
  })

module.exports = problemRouter;