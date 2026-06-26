// app/api/posts/[...slug]/route.ts
import { NextResponse } from 'next/server'

// /api/posts/2023/01/hello-world
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params

  return NextResponse.json({
    slug,
    message: `Handling route: /api/posts/${slug.join('/')}`,
  })
}