import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Mir Ashiful Karim',
    keywords: 'web development, programming, fullstack, mobile development, react, angular, tailwindcss, portfolio, asp. dot, net, java, node, php, python, frontend, backend',
    description: 'Prepared to take any changes to create web and mobile applications',
  }

export default Meta