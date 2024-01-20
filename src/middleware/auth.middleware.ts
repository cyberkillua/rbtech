import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import db from "../models";

interface UserPayload {
  id: string;
}

export const isLoggedIn = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token: string;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      if (token) {
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET as string
        ) as UserPayload;

        req.user = await db.User.findOne({ where: { id: decoded.id } });

        next();
      }
    } catch (error) {
      res.status(401).json({ error: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ error: "Not authorized, token failed" });
  }
};

// export const isAdmin = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   const admin = await db.Admin.findOne({ where: { id: req.admin?.id } });
//   if (!admin) {
//     res.status(401).json({ error: "Not authorized" });
//     return;
//   }

//   next();
// };

// export const isAdminLoggedIn = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   let token: string;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];

//       if (token) {
//         const decoded = jwt.verify(
//           token,
//           process.env.JWT_SECRET as string
//         ) as UserPayload;

//         req.admin = await db.Admin.findOne({ where: { id: decoded.id } });

//         next();
//       }
//     } catch (error) {
//       res.status(401).json({ error: "Not authorized, token failed" });
//     }
//   } else {
//     res.status(401).json({ error: "Not authorized, token failed" });
//   }
// };
