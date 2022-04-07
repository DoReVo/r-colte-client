import log from "loglevel";

const inDevMode = import.meta.env.DEV;

if (inDevMode) log.setLevel("DEBUG");

export default log;
