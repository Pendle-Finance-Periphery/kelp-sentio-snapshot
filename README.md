## Usage

User snapshot for the configured frequency is recorded `Event Log` tab of Sentio project, which can be fetched/viewed in `Data Studio` with a simple SQL query. 

An easy way to do get the latest result of user snapshot is to use this query:

```sql
select user, share,  block_number  from `UserDailyShare` where  block_number = (select max( block_number ) from `UserDailyShare`)
```

Please note that Sentio processor might be unstable, causing delay in data processing. It's necessary to check if the latest blocknumber fits your expectation.