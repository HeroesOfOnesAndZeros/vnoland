import { opine, serveStatic } from "https://deno.land/x/opine@1.2.0/mod.ts";
import  vueServerRenderer from 'https://deno.land/x/vue_server_renderer@/mod.js';

import App from './vno-ssr/build.js';
import { join, dirname, resolve } from "https://deno.land/std@0.63.0/path/mod.ts";
import  styles  from './vno-ssr/style.js'

//const port = 3000
// const app = opine();

//app.use(serveStatic('vno-build'));
// app.use(serveStatic(resolve('vno-build')));
// app.use(serveStatic(resolve('src/assets')))
 ///const __dirname = dirname(import.meta.url);



//app.use("/", (req, res, next) => {
  
     
      let rendered = vueServerRenderer(App, (err, res) => {
        return res;
      });
      
      const html =
      `<html>
         <head>
         
            ${styles}
           
         </head>
         <body>
           <div id="root">${rendered}</div>
           <script type="module" src="./build.js"></script>
         </body>
       </html>`;
       
    

    //res.type("text/html").send(html);
  //});

// app.listen({ port });
  
//console.log(`Vue SSR App listening on port ${port}`);

// You need to import `h` factory function as Deno Deploy
// uses it instead of `React.createElement`

function handleRequest(request) {
  const { pathname } = new URL(request.url);

  let rendered = vueServerRenderer(App, (err, res) => {
    return res;
  });
  
  const html =
  `<html>
     <head>
     
        ${styles}
       
     </head>
     <body>
       <div id="root">${rendered}</div>
       <script type="module" src="./build.js"></script>
     </body>
   </html>`;
 
   

    return new Response(html, {
      headers: {
        // The "text/html" part implies to the client that the content is HTML
        // and the "charset=UTF-8" part implies to the client that the content
        // is encoded using UTF-8.
        "content-type": "text/html; charset=UTF-8",
      },
    });
  

  
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});