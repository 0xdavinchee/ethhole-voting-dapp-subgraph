// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Candidate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Candidate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Candidate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Candidate", id.toString(), this);
  }

  static load(id: string): Candidate | null {
    return store.get("Candidate", id) as Candidate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get electionId(): BigInt {
    let value = this.get("electionId");
    return value.toBigInt();
  }

  set electionId(value: BigInt) {
    this.set("electionId", Value.fromBigInt(value));
  }

  get candidateId(): BigInt {
    let value = this.get("candidateId");
    return value.toBigInt();
  }

  set candidateId(value: BigInt) {
    this.set("candidateId", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get voteCount(): BigInt {
    let value = this.get("voteCount");
    return value.toBigInt();
  }

  set voteCount(value: BigInt) {
    this.set("voteCount", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get election(): string {
    let value = this.get("election");
    return value.toString();
  }

  set election(value: string) {
    this.set("election", Value.fromString(value));
  }
}

export class Election extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Election entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Election entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Election", id.toString(), this);
  }

  static load(id: string): Election | null {
    return store.get("Election", id) as Election | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get electionId(): BigInt {
    let value = this.get("electionId");
    return value.toBigInt();
  }

  set electionId(value: BigInt) {
    this.set("electionId", Value.fromBigInt(value));
  }

  get registrationEndPeriod(): BigInt {
    let value = this.get("registrationEndPeriod");
    return value.toBigInt();
  }

  set registrationEndPeriod(value: BigInt) {
    this.set("registrationEndPeriod", Value.fromBigInt(value));
  }

  get votingEndPeriod(): BigInt {
    let value = this.get("votingEndPeriod");
    return value.toBigInt();
  }

  set votingEndPeriod(value: BigInt) {
    this.set("votingEndPeriod", Value.fromBigInt(value));
  }

  get starter(): Bytes {
    let value = this.get("starter");
    return value.toBytes();
  }

  set starter(value: Bytes) {
    this.set("starter", Value.fromBytes(value));
  }

  get candidates(): Array<string> {
    let value = this.get("candidates");
    return value.toStringArray();
  }

  set candidates(value: Array<string>) {
    this.set("candidates", Value.fromStringArray(value));
  }
}

export class PastElection extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PastElection entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PastElection entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PastElection", id.toString(), this);
  }

  static load(id: string): PastElection | null {
    return store.get("PastElection", id) as PastElection | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get electionId(): BigInt {
    let value = this.get("electionId");
    return value.toBigInt();
  }

  set electionId(value: BigInt) {
    this.set("electionId", Value.fromBigInt(value));
  }

  get winnerName(): string {
    let value = this.get("winnerName");
    return value.toString();
  }

  set winnerName(value: string) {
    this.set("winnerName", Value.fromString(value));
  }

  get voteCount(): BigInt {
    let value = this.get("voteCount");
    return value.toBigInt();
  }

  set voteCount(value: BigInt) {
    this.set("voteCount", Value.fromBigInt(value));
  }

  get winnerAddress(): Bytes {
    let value = this.get("winnerAddress");
    return value.toBytes();
  }

  set winnerAddress(value: Bytes) {
    this.set("winnerAddress", Value.fromBytes(value));
  }
}

export class VoteForCandidateEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save VoteForCandidateEvent entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VoteForCandidateEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VoteForCandidateEvent", id.toString(), this);
  }

  static load(id: string): VoteForCandidateEvent | null {
    return store.get(
      "VoteForCandidateEvent",
      id
    ) as VoteForCandidateEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get electionId(): BigInt {
    let value = this.get("electionId");
    return value.toBigInt();
  }

  set electionId(value: BigInt) {
    this.set("electionId", Value.fromBigInt(value));
  }

  get candidateId(): BigInt {
    let value = this.get("candidateId");
    return value.toBigInt();
  }

  set candidateId(value: BigInt) {
    this.set("candidateId", Value.fromBigInt(value));
  }

  get voteCount(): BigInt {
    let value = this.get("voteCount");
    return value.toBigInt();
  }

  set voteCount(value: BigInt) {
    this.set("voteCount", Value.fromBigInt(value));
  }
}
