import { Commitment, Nullifier } from "../../generated/schema";
import {
  NewCommitment,
  NewNullifier,
} from "../../generated/TornadoPool/TornadoPool";

export function handleCommitment(event: NewCommitment): void {
  let entity = new Commitment(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.index = event.params.index;
  entity.commitment = event.params.commitment;
  entity.encryptedOutput = event.params.encryptedOutput;

  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNullifier(event: NewNullifier): void {
  let entity = new Nullifier(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  entity.nullifier = event.params.nullifier;

  entity.blockNumber = event.block.number;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
