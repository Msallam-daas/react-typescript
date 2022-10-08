import React,{ReactElement, ReactNode} from 'react';

interface Containerprops{
    title:string,
    children:ReactNode,
    number?:number
}
function Container(props:Containerprops):ReactElement{
  const {title,children,number} =props;
  return(
    <div className="App-header">
      <h1> {title}</h1>
      {children}
      <p>TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.[5] As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation. The default TypeScript Compiler can be used,[6] or the Babel compiler can be invoked to convert TypeScript to JavaScript</p>
      {/* <p>{number && number}</p> */}
    </div>
  )

}
export default Container;