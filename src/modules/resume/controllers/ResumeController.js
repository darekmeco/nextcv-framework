import Resume from '../models/Resume';

const ResumeController = function ResumeController() {};

ResumeController.prototype.index = async function index(request, reply) {
  const data = await Resume.query();
  reply.send({ hello: 'resume controller' });
};

export default new ResumeController();
