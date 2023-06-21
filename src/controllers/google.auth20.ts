// import passport from "passport";
// import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import pool from "../pool";
// import dotenv from "dotenv";
// import {user} from '../types/user.type'
// dotenv.config();

// const query = pool.prototype.query 
// const clientID: string | undefined = process.env.CLIENT_ID;
// const clientSecret: string | undefined = process.env.CLIENT_SECRET;
// const callbackURL = "http://localhost:4000/auth/google/callback"


// if (!clientID || !clientSecret) {
//   throw new Error("Missing client ID or client secret in environment variables.");
// } 

// passport.use(
//   new GoogleStrategy(
//     {
//       CLIENT_ID,
//       CLIENT_SECRET,
//       callbackURL
//     },
//     async (_: undefined, __: undefined, profile: any, done: Function) => {
//       const account = profile._json;

//       let user: user 
//       try {
//         const currentUserQuery = await query(
//           `SELECT * FROM Users WHERE google_id =$1`,
//           [account.sub]
//         );

//         if (currentUserQuery.rows.length === 0) {
//           await query(
//             "INSERT INTO Users (username,google_id,google_photo ) VALUES ($1,$2,$3)",
//             [account.name, account.sub, account.picture]
//           );

//           const idQuery = await query(
//             `SELECT id FROM Users WHERE google_id=$1`,
//             [account.sub]
//           );

//           user = {
//             user_id: idQuery.rows[0].id,
//             username: account.name,
//             google_photo: account.picture,
//           };
//         } else {
//           user = {
//             user_id: currentUserQuery.rows[0].id,
//             username: currentUserQuery.rows[0].username,
//             google_photo: currentUserQuery.rows[0].google_photo,
//           };
//         }

//         done(null, user);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );

// passport.serializeUser(function (user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function (user:user, done) {
//   done(null, user);
// });

