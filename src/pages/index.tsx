import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/Header';
import styles from '@/styles/Index.module.css';

const Index: NextPage = () => {
  const { t } = useTranslation(['common', 'footer']);

  return (
    <>
      <Header />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>{t('title')}</h1>

          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs"
              className={styles.card}
            >
              <h2>Documentation &rarr;</h2>
              <p>Next.js</p>
            </a>

            <a
              href="https://redux-toolkit.js.org/"
              className={styles.card}
            >
              <h2>State &rarr;</h2>
              <p>Redux Toolkit</p>
            </a>

            <a
              href="https://github.com/axios/axios"
              className={styles.card}
            >
              <h2>HTTP client &rarr;</h2>
              <p>Axios</p>
            </a>

            <a
              href="https://eslint.org/"
              className={styles.card}
            >
              <h2>Linter &rarr;</h2>
              <p>ESLint</p>
            </a>

            <a
              href="https://github.com/isaachinman/next-i18next"
              className={styles.card}
            >
              <h2>Translations &rarr;</h2>
              <p>next-i18next</p>
            </a>

            <a
              href="https://github.com/garmeeh/next-seo"
              className={styles.card}
            >
              <h2>SEO &rarr;</h2>
              <p>next-seo</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          {t('support', { ns: 'footer' })}
        </footer>
      </div>
    </>
  );
};

export const getStaticProps = async ({locale} : {locale:string}) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
});

export default Index;
