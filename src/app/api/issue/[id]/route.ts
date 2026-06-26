import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'
import { db } from '../../../../../db'
import { issues } from '../../../../../db/schema'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const issueId = Number(id)


    const issue = await db.query.issues.findFirst({
      where: eq(issues.id, issueId),
    })

    if (!issue) {
      return NextResponse.json({ error: 'Issue not found' }, { status: 404 })
    }

    return NextResponse.json(issue)
  } catch (error) {
    console.error('Error fetching issue:', error)
    return NextResponse.json(
      { error: 'Failed to fetch issue' },
      { status: 500 }
    )
  }
}