# True News TCR
_Part of Gitcoin/Consensys Beyond BlockchainHackaton_

True News is a token-curated registry (TCR) that lets its participants curate news it found interesting. Anyone can challenge what one considers as *misleading / fake news*.
To provide skin-in-the-game reputation, we require that participants belong on HumanityDAO protocol.

## Deployed Addresses (Ethereum Ropsten Testnet)

```
Humanity (ERC20): 0xd3a2439865ef39709fd4502ea447f734ab40675d
HumanityRegistry: 0x547c2025CE087211eB74d1101e15070E3a4Ddb89
TwitterHumanityApplicant: 0xAb04D4Dde09fC8Ec7726223e8178D816940cB21B
HumanityGovernance: 0x761006cf8891307aD6e484F33a1f3fe3fD4bE648
```

# Going forward

Query Humanity, whether by simulating (like Hamza said) or deploy on testnet (like Snake said, Humanity GitHub added it yesterday, just for us)

# ERC20 token [TRUE]
- Pre-mined 1,000,000,000 UNITS
- Give 10,000 TRUE to anyone asking, for free, who is registered on Humanity DAO.

# TCR smart contract
- Stake 1,000 TRUE to upload a news article (URL)
- Vote ongoing for 2 days, anyone can stake TRUE tokens to say if ACCURATE or MISLEADING 
  - if yes, keep and give 1,000 TRUE back
  - if no, lose 1,000 TRUE
- Allow revoting on an article with staking x% higher coins than the previous stake. 

# Front-end
- Ask for HumanityDAO identity by querying (does it require a digital signature?)
- Page “giving you 10,000 TRUE”
- Box to input URL + 1,000 TRUE transaction call
- List page: pull HTML title of news URL + thumbnail preview (like social network do)

# Ressources
https://github.com/marbleprotocol/humanity
https://github.com/skmgoldin/tcr
