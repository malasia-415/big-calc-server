const ProblemsService = {
    getAllProblems(knex){
        return knex
         .select('*')
         .from('problems');
    },
    insertProblem(knex, newProblem){
        return knex
         .insert(newProblem)
         .into('problems')
         .returning('*')
         .then(rows => { return rows[0] });
    },
    getProblemById(knex, problemId){
        return knex
         .select('*')
         .from('problems')
         .where('id', problemId)
         .first(); //get user itself
    },
    deleteProblem(knex, problemId){
        return knex('problems')
         .where('id', problemId)
         .delete();
    }
  };
  
  module.exports = ProblemsService;












