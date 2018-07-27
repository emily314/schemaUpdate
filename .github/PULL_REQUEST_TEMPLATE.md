closes ISSUE_HERE

If shortened checklist is needed, get it from here: https://github.ibm.com/toscana/planning/blob/gh-pages/shortChecklist.md

**Code review:**

- [ ] **The PR has been reviewed by a peer in the squad**
- [ ] **All review comments have been addressed**, 
    - [ ] or otherwise captured in a separate task in planning repository. If you checked this box, please add a justification in the PR as to why the code review comment must be addressed through a separate task.

**Code quality:**
- [ ] **Pre-merge pipeline is passing** - ie: all pre-merge quality criteria have been met as asserted by pre-merge pipeline.
    - [ ] In the rare scenarios where a change does not go through the pre-merge pipeline, deploying the code change in a sandbox and testing it is mandatory. Tick this box if this is the case and add comments in the PR on where the code is deployed and the nature of the tests and **why the test cannot be automated**.
- [ ] **The acceptance tests have been implemented in the PR** in appropriate form (unit tests, separate PR with gatling test, ui test, ...) and reviewed by the squad lead or test focal point
    - [ ] If the implementation of a part of the acceptance tests is located in a separate task, please justify the reasons for delaying the implementation of some of the tests
- [ ] **Acceptance tests have been documented** in BDD form, as comment next to the corresponding test code. In the case where the acceptance tests will be implemented in a separate task, the story linked to this PR should have the acceptance test documented in BDD form, including negative scenarios.
- [ ] **The squad lead OR a test focal point has reviewed and validated the acceptance tests**

**Security**:
- [ ] If linked github issue has any potential impact to security it is marked as **security:related**, and a [review](https://github.ibm.com/toscana/security/wiki/Security-reviews) have occurred with our security architect (Olgierd Pieczul). If linked github issue is a trivial change without no possible security impact, it has been marked as **security:unrelated**. For any doubts about the impact, please contact security architect.
- [ ] For PRs that change and add new ways to call the microservice (either through API signature changes, or other means such as consumption of Kafka events), the same PR should include an **update to the access control rules.md file in the same repository**.

**Open source**:
- [ ] There is **no outstanding unapproved open source material in the PR**, either copy pasted code, added jar or a reference to a remote 3rd party npm / maven repository in the build scripts.

**Tracking**:
- [ ] The PR is referencing a github issue (task, bug or story) in toscana/planning.
- [ ] The github issue in toscana/planning is assigned to current milestone. If this is a story, it has an estimate in SP.

**Ownership of continuous delivery up to production**: 
- [ ] There is no gap that would prevent the PR to fully flow up to production. - ie: all necessary deployment scripts are in place (or in plan for the current iteration through git tickets) and code change is aligned with general overall architecture

**API consistency**:
- [ ] There is no change to external API signature, unless reviewed and approved by senior leadership
- [ ] Backward compatibility both for external and internal interfaces (API, Kafka events, shared libraries, ...) is in place.

--------

Notes for committers:
- [ ] Checklist for dev (above) is filled out and part of the PR
- [ ] Don't merge your own PR, get another committer to do so, unless very specific emergency-like scenario with no other committer around, or simply reverting a PR. 
    - If you are driving a team / initiative and your are pressured to deliver a feature where you fell quality is compromised (or kicked down the road - ie: "we'll fix next iteration" or "we'll open a task to track this"), talk to Vincent, David, Brendan. It's usually best to get another committer involved in those scenarios.
- [ ] The merge and integration pipeline are currently passing
    - [ ] If the current failure in integration pipeline is totally unrelated to the area touched by this PR. A written justification showing that the pipeline tests in this area are passing should be added as comment if bypassing this rule.
