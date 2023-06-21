const React = require("react");
const { useEffect } = require("react");
const Cookies = require("js-cookie");

export const setPageTitle = (pageName) => {
  useEffect(() => {
    document.title = pageName;
  }, []);
};
export const IsAuthCookie = async (cookieName) => {
  const sessionCookie = Cookies.get("session");
};
export const isUUID = (value) => {
  const uuidPattern =
    /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[89abAB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/;
  return uuidPattern.test(value);
};
