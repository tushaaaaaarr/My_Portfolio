// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'ror.Tusharsamala.com':
    case 'Tusharsamala.com':
    case 'ror.localhost':
    case 'localhost':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    case 'java.Tusharsamala.com':
    case 'java.localhost':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.Tusharsamala.com':
    case 'frontend.localhost':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.Tusharsamala.com':
    case 'node.localhost':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
