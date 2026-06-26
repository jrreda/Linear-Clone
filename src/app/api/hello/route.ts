// app/api/hello/route.ts
import { NextResponse } from 'next/server'

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns a hello world message
 *     responses:
 *       200:
 *         description: Hello World response
 */
export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' })
}
