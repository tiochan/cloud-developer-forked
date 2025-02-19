import express from 'express';
import {Application, Request, Response, NextFunction, Errback} from "express";
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';
import { filter } from 'bluebird';

/* @TODO: define the auth function
export function requireAuth(req: Request, res: Response, next: NextFunction) {
}
*/

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: true })) //for requests from forms-like data


  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  app.get('/filteredimage',
    // requireAuth,    // @TODO: add JWT support (+ token)
    async ( req: Request, res: Response ) => {
      let { image_url } = req.query;

      if(!image_url) {
        return res.status(400).send( { message: 'Image URL is requred'});
      }

      try {
        let filteredImagePath: string = await filterImageFromURL(image_url);

        // To delete the file we have to monitor the callback to res.sendFile, 
        // otherwise the file might be deleted before the requester get it
        // Source: [Stack overflow](https://stackoverflow.com/questions/59759842/nodejs-file-get-deleted-before-sending-response-res-send)
        res.status(200).sendFile(filteredImagePath, error => {
          if(error) {
            console.log(`Error delivering file: ${error}`);
            res.sendStatus(500);
          }

          deleteLocalFiles([filteredImagePath.toString()]);
        });

      } catch(error) {
        // Handle exceptions (like files that can't be accessed, wrong URLs, ...)
        return res.status(400).send( { message : error } );
      }

    }
  );

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();