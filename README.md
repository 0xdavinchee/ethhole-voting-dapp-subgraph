# ethhole-voting-dapp-subgraph

A super simple subgraph running continuous deployment set up with github actions.

Notes:
- Goal is to automate deployment process. 
- deploy-main.yml handles deployment to as many testnet/mainnet networks as desired.
- A good approach would be to create yml files which would take into consideration tags: for example, let's say we start on v1: `name: deploy-main-v1` and we would also add:
```
tags:
  - v1*
```
so that it would only update the specified subgraphs when the version isn't breaking. (i.e. on v2).

- We also want to be able to handle the case where we have separate `feature`/`dev` subgraph URLs which would be used for internal testing purposes (`deploy-feature` handles this). Given that we *MUST* create a URL on the Graph dashboard initially, we could either:
    - all use the same `feature`/`dev` URLs (this will become problematic if we are working on multiple subgraph features-unlikely)
    - create a new `feature` subgraph for every new `feature` and update this information in the `package.json` under `"scripts"` at `deploy:feature`. (this would be pretty messy after a while given that you can't delete subgraphs)

- When we do want to deploy a new subgraph(s) with breaking changes, it will be necessary to create new subgraph projects firstly on the Graph's dashboard with a new name: `ethhole-voting-dapp-v2-network`. Then create a new `deploy-main-v2.yml` file to handle deployments to new endpoints for this new version. I think it doesn't make sense to constantly be merging things into master as it doesn't seem possible to do so without having to change a lot of things each time. A better solution would just be to create new tags or branches where the name is the version. 
- Note that if you release a version, but don't specify in your `.yml` file of the branch you are targetting to filter and allow your branch/tag, your release will not have the updates.