import ResumeController from '../controllers/ResumeController';

export default {
  method: 'GET',
  url: '/resume',
  handler: ResumeController.index,
};
