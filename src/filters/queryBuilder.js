export const queryBuilder = query => {
  let queryString = "";
  if (query && query !== {}) {
    Object.keys(query).map(params => {
      if (query[params] !== "") {
        queryString = queryString + `${params}=${query[params]}` + "&";
      }
    });
    queryString = queryString.substring(0, queryString.length - 1);
  }
  return queryString;
};
