export const configFun = (accessKey: any, secretKey: any, region: any) => {
  return {
    basePath: '/plugins/elementmanager-aws-lb',
    ACCESS_KEY_ID: accessKey,
    SECRET_KEY: secretKey,
    REGION: region,
  };
};
