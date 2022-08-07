export const endPoint = (lat, lon, type) => {
  return `${type}?lat=${lat}&lon=${lon}&appid=dc0c1cd70b77b5119bd48dde85d03bff`;
};

export const searchEndPoint = name => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=dc0c1cd70b77b5119bd48dde85d03bff`;
};
