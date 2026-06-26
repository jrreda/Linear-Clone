// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  console.log(id);

  // In a real app, fetch user data from a database
  const userData = {
    id,
    name: 'Mahmoud Reda',
    email: 'jrreda.dev@gamil.com',
  }

  return NextResponse.json(userData)
}