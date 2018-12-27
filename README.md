Recruitment Dashboard
=====================

Read-only KPI and applicant dashboard for volunteer recruitment. Companion piece to [volunteer.samaritans.org](https://volunteer.samaritans.org).

Offers three views:

- Overview of KPIs, month by month
- List of applicants
- Detailed view of specific applicants

Database import job
-------------------

This app contains two parts of a database import/sync task:

- `utils/dynamodb` will scan a DynamoDB table and save the results to a file `enquiries.json`
- `seeders/seed-enquiries` will use that JSON file to seed a postgres database, according tos a defined schema

Use `npm run migrate` to make sure the schema is up to date, and then `npm run sync` to run the whole job.

To just re-seed the database from a pre-existing enquiries.json file (because AWS DynamoDB scans are expensive and slow), run `npm run seed` instead.