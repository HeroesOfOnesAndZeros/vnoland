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
  
     
      // let rendered = vueServerRenderer(App, (err, res) => {
      //   return res;
      // });
      
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


addEventListener("fetch", (event) => {
  // renderToString generates html string from JSX components.
  const response = new Response(`<html>
    <head>
    
    
      
    </head>
    <body>
      <div id="root">hi</div>
      <script type="module" src="./build.js"></script>
    </body>
  </html>`
    , {
    headers: { "content-type": "text/html; charset=uft-8" },
  });

  event.respondWith(response);
});