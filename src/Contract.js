const contractAddress = "0x9Be3eD2D33766536E29C2b4F1949fDd40f3BC8b5";
const contractAbi = [
  "constructor(uint64 subscriptionId, address VRFCoordinator)",
  "error OnlyCoordinatorCanFulfill(address have, address want)",
  "event HandsDelt(uint256 indexed val1, uint256 val2, uint256 val3, uint256 val4)",
  "event Hit(address indexed player)",
  "event OwnershipTransferRequested(address indexed from, address indexed to)",
  "event OwnershipTransferred(address indexed from, address indexed to)",
  "event PlayerAdded(address indexed player, uint256 betAmount)",
  "event RequestFulfilled(uint256 requestId, uint256[] randomWords)",
  "event RequestSent(uint256 requestId, uint32 numWords)",
  "event Stand(uint256 playerCount, uint256 dealerCount, uint256 indexed amountWon)",
  "function acceptOwnership()",
  "function addPlayer() payable",
  "function getContractBalance() view returns (uint256)",
  "function getCurrentPlayer() view returns (address)",
  "function getCurrentPlayersBet() view returns (uint256)",
  "function getDealersHand() view returns (uint256[])",
  "function getPlayersHand() view returns (uint256[])",
  "function getRefund() payable",
  "function getRequestStatus(uint256 _requestId) view returns (bool fulfilled, uint256[] randomWords)",
  "function hit()",
  "function lastRequestId() view returns (uint256)",
  "function owner() view returns (address)",
  "function rawFulfillRandomWords(uint256 requestId, uint256[] randomWords)",
  "function requestIds(uint256) view returns (uint256)",
  "function requestRandomWords() returns (uint256 requestId)",
  "function s_requests(uint256) view returns (bool fulfilled, bool exists)",
  "function stand() payable",
  "function transferOwnership(address to)",
];

export { contractAddress };
export { contractAbi };
