import Translation from '../../../../core/common/Translation.store';

export const HeaderNavI18n = new Translation({
    languages: {
        en: () => import('./i18n/en.json'),
    },
    keys: {
        frontend: 'frontend',
        backend: 'backend',
    },
});
