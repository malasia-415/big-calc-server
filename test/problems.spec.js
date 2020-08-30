const ProblemsService = require('../src/problems/problems-service')
const knex = require('knex')
    let db
    let testProblems = [
        {
            problem: '1 + 1',
            id: 1
        },
        {
            problem: '2 + 2',
            id: 2
        }
    ]
       before(() => {
         db = knex({
           client: 'pg',
           connection: process.env.DATABASE_URL,
         })
       })
      before('cleanup', () => db.raw('TRUNCATE TABLE problems CASCADE;'));
      afterEach('cleanup', () => db.raw('TRUNCATE TABLE problems CASCADE;'))
      
      after('destroy db connection', () => db.destroy())
      
  describe('getAllProblems()', () => {
    it('returns an empty array', () => {
      return ProblemsService
        .getAllProblems(db)
        .then(problems => expect(problems).to.eql([])
        );
    }); 
 });


  describe('insertProblems()' , () => {
    it('inserts record in db and returns answer with new id', () => {

    it('throws not-null constraint error if title not provided', () => {    
      const newProblem = {
        id: 1,
        problem: '1 + 1'
      };

      return ProblemsService.insertProblem(db, newProblem)
        .then(actual => {
          expect(actual).to.eql({
            id: 1,
            problem: newProblem.problem,
          });
        });
      });
    
   });
});


describe('getAnswersById()', () => {
    context('with data present', () => {
        before('problems', () => 
         db('problems')
        .insert(testProblems)
     );
  });
});
      
describe('deleteAnswer()', () => {
    context('with data present', () => {
       before('insert problem', () => 
          db('problems')
         .insert(testProblems)
    );
  });
});
    