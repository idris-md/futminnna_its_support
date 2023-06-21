import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { User } from "./interface";
import Role from "@/models/Role";

/** Example on how to extend the built-in session types */
declare module "next-auth" {
  interface Session {
    /** This is an example. You can find me in types/next-auth.d.ts */
    user: User;
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    /** This is an example. You can find me in types/next-auth.d.ts */
    accessToken: string;
    username: string;
    roles:Role[];
  }
}
