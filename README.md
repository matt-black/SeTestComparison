SeTestComparison
================

Nightwatch suite that compares the execution speed of different hosted selenium services

## Dependencies

  * NodeJS
  * A Windows machine (for Spoonium)
  * The Spoon Plugin (again, for Spoonium)

Right now, this suite is a single test that runs against each service in parallel. NightwatchJS automatically times how long it takes each test to execute, so you can compare however you'd like.

**Note**: Spoonium applications execute on you local machine, so the speed may (will) vary between machines and based on how many other processes are running on the machine at the same time. 
