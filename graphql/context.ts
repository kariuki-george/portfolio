import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient;
};

export async function createContext({ req, res }:{req:NextRequest, res:NextResponse}): Promise<Context> {
  return {
    prisma,
  };
}
