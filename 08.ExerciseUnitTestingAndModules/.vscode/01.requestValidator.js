function solve(obj = {}) {
  let validMethods = ["GET", "POST", "DELETE", "CONNECT"];

  if (!obj.hasOwnProperty("method") || !validMethods.includes(obj.method)) {
      throw new Error("Invalid request header: Invalid Method");
  }

  let patternUri = new RegExp("^[A-Za-z0-9_.]+$");

  if(!obj.hasOwnProperty("uri") || !obj.uri.match(patternUri) && obj.uri !== "*"){
    throw new Error("Invalid request header: Invalid URI");
  }

  let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  if(!obj.hasOwnProperty("version") || !validVersions.includes(obj.version)){
    throw new Error("Invalid request header: Invalid Version");
  }

  let patternMessage = new RegExp(/^[^<>\\&'"]*$/);

  if(!obj.hasOwnProperty("message") || !obj.message.match(patternMessage)){
    throw new Error("Invalid request header: Invalid Message");
  }

  return obj;
}

console.log(
  solve({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  })
);
