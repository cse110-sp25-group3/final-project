let jobsPromise = null;

export function fetchJobs() {
  if (!jobsPromise) {
    jobsPromise = fetch('/data/job_positions.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load jobs');
        return res.json();
      });
  }
  return jobsPromise;
}
