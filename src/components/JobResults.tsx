import { JobFilterValues } from "@/lib/validation";
import JobListItem from "./JobListItem";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface JobResultsProps {
  filterValues: JobFilterValues,
}

export async function JobResults({
  filterValues: { q, type, location, remote },
}: JobResultsProps) {
  const searchStrings = q
    ?.split(" ")
    .filter(word => word.length > 0)
    .join(" & ");

  const searchFliter: Prisma.JobWhereInput = searchStrings ? {
    OR: [
      { title: { search: searchStrings } },
      { companyName: { search: searchStrings } },
      { type: { search: searchStrings } },
      { locationType: { search: searchStrings } },
      { location: { search: searchStrings } },
    ],
  } : {};

  const where: Prisma.JobWhereInput = {
    AND: [
      searchFliter,
      type ? { type } : {},
      location ? { location } : {},
      remote ? { locationType: "Remote" } : {},
      { approved: true },
    ],
  };

  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-4 grow">
      {jobs.map((job) => (
        <JobListItem
          job={job}
          key={job.id}
        />
      ))}
      {jobs.length === 0 && (
        <p className="text-muted-foreground text-center m-auto">
          No jobs found
        </p>
      )}
    </div>
  )
}