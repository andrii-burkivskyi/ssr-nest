import Translation from '../../core/common/Translation.store';

export const ProjectsI18n = new Translation({
  languages: {
    en: () => import('./i18n/en.json'),
  },
  keys: {
    createProject: 'createProject',
    updateProject: 'updateProject',
    name: 'name',
    color: 'color',
    url: 'url',
    submit: 'submit',
  },
});
