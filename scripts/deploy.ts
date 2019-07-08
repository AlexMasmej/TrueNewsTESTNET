import {
  FakeGasEstimateSubprovider,
  RPCSubprovider,
  PrivateKeyWalletSubprovider,
  Web3ProviderEngine
} from '@0x/subproviders';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { BigNumber, providerUtils } from '@0x/utils';
import { config } from 'dotenv';

import { getNonce, getAddress } from '../test/utils/utils';

import {
  HumanityContract,
  HumanityGovernanceContract,
  HumanityRegistryContract,
  TwitterHumanityApplicantContract
} from '../build/wrappers';

config();

(async () => {
  try {
    const rpcUrl = 'https://ropsten.infura.io/v3/48a9df578f3f4c4e812bb8760401318a';

    const deployer = '0x5d8c77d2123ACD0490Bf779eac2be02d5B0D322C'.toLowerCase();

    const provider = new Web3ProviderEngine();
    const privateKey = process.env.PRIVATE_KEY as string;
    provider.addProvider(new PrivateKeyWalletSubprovider(privateKey));
    provider.addProvider(new RPCSubprovider(rpcUrl));
    provider.addProvider(new FakeGasEstimateSubprovider(8000000));
    providerUtils.startProviderEngine(provider);

    const web3Wrapper = new Web3Wrapper(provider);

    const nonce = await getNonce(web3Wrapper, deployer);
    const registryAddress = getAddress(deployer, nonce + 2);

    const txDefaults = { from: deployer, gas: 6500000 };

    const humanity = await HumanityContract.deployAsync(provider, txDefaults, registryAddress);

    const humanityGovernance = await HumanityGovernanceContract.deployAsync(
      provider,
      txDefaults,
      humanity.address,
      new BigNumber('1e18')
    );

    const humanityRegistry = await HumanityRegistryContract.deployAsync(
      provider,
      txDefaults,
      humanity.address,
      humanityGovernance.address
    );

    await TwitterHumanityApplicantContract.deployAsync(
      provider,
      txDefaults,
      humanityGovernance.address,
      humanityRegistry.address,
      humanity.address,
      '0x0000000000000000000000000000000000000000' // Uniswap
    );
  } catch (e) {
    console.log(e);
  }
  process.exit();
})();
