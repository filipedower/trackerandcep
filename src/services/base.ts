const base = () => {
    const baseHost = process.env.REACT_APP_BASE_HOST;
    const token = process.env.REACT_APP_ACCESS_TOKEN;
    const user = process.env.REACT_APP_ACCESS_USER;
  
    return {
      api: {
        tracker:(code: string) => `${baseHost}?user=${user}&token=${token}&codigo=${code}`,
      },
    };
  };
  
  export default base;