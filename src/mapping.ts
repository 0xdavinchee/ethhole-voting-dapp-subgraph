import { BigInt } from "@graphprotocol/graph-ts";
import {
  ArchivePastElection,
  RegisterCandidate,
  StartElection,
  VoteForCandidate,
} from "../generated/Voting/Voting";
import {
  Candidate,
  PastElection,
  StartElectionEvent,
  VoteForCandidateEvent,
} from "../generated/schema";

export function handleArchivePastElection(event: ArchivePastElection): void {
  let pastElection = new PastElection(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  pastElection.electionId = event.params.electionId;
  pastElection.voteCount = event.params.voteCount;
  pastElection.winnerName = event.params.winnerName;
  pastElection.winnerAddress = event.params.winnerAddress;

  pastElection.save();
}

export function handleRegisterCandidate(event: RegisterCandidate): void {
  let candidate = new Candidate(
    event.params.electionId.toHex() + event.params.candidateId.toHex()
  );
  candidate.electionId = event.params.electionId;
  candidate.candidateId = event.params.candidateId;
  candidate.address = event.transaction.from;
  candidate.voteCount = new BigInt(0);
  candidate.name = event.params.name;

  candidate.save();
}

export function handleStartElection(event: StartElection): void {
  let startElection = new StartElectionEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  startElection.electionId = event.params.electionId;
  startElection.registrationEndPeriod = event.params.registrationEndPeriod;
  startElection.votingEndPeriod = event.params.votingEndPeriod;

  startElection.save();
}

export function handleVoteForCandidate(event: VoteForCandidate): void {
  let voteForCandidateEvent = new VoteForCandidateEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  voteForCandidateEvent.electionId = event.params.electionId;
  voteForCandidateEvent.candidateAddress = event.params.candidateAddress;
  voteForCandidateEvent.voteCount = event.params.voteCount;

  voteForCandidateEvent.save();

  let candidate = Candidate.load(
    event.params.electionId.toHex() + event.params.candidateAddress.toHex()
  );
  if (candidate) {
    candidate.voteCount.plus(new BigInt(1));
    candidate.save();
  }
}
