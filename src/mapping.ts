import { BigInt } from "@graphprotocol/graph-ts"
import {
  Voting,
  ArchivePastElection,
  RegisterCandidate,
  StartElection,
  VoteForCandidate
} from "../generated/Voting/Voting"
import { Candidate, ActiveElection, PastElection, VoteForCandidateEvent } from "../generated/schema"

export function handleArchivePastElection(event: ArchivePastElection): void {
  let pastElection = new PastElection(event.params.electionId.toHex());

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
  candidate.election = event.params.electionId.toHex();

  candidate.save();
}

export function handleStartElection(event: StartElection): void {
  let newElection = new ActiveElection(event.params.electionId.toHex());
  newElection.electionId = event.params.electionId;
  newElection.registrationEndPeriod = event.params.registrationEndPeriod;
  newElection.votingEndPeriod = event.params.votingEndPeriod;

  newElection.save();
}

export function handleVoteForCandidate(event: VoteForCandidate): void {
  let voteForCandidateEvent = new VoteForCandidateEvent(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  voteForCandidateEvent.electionId = event.params.electionId;
  voteForCandidateEvent.candidateId = event.params.candidateId;
  voteForCandidateEvent.voteCount = event.params.voteCount;

  voteForCandidateEvent.save();

  let candidate = Candidate.load(
    event.params.electionId.toHex() + event.params.candidateId.toHex()
  );
  if (candidate) {
    candidate.voteCount = event.params.voteCount;
    candidate.save();
  }
}
