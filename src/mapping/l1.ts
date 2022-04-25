import { Account } from "../../generated/schema";
import { PublicKey } from "../../generated/BridgeHelper/BridgeHelper";

export function handlePublicKey(event: PublicKey): void {
  let entity = new Account(
    event.transaction.from.toHex() + "-" + event.logIndex.toString()
  );

  entity.key = event.params.key;
  entity.owner = event.params.owner;
  entity.blockNumber = event.block.number;

  entity.save();
}
